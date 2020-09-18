all:
	@echo Please pick a target

clean:
	rm -rf public/balajisivaraman

serve:
	hugo server -D -w -c content/ --config config.toml -d public/balajisivaraman/

push:
	git push origin master

build:
	hugo -c content/ --config config.toml -d public/balajisivaraman/
	cp keybase.txt public/balajisivaraman/
	cp balajisivaraman.asc public/balajisivaraman/

deploy: clean build
	rsync -avzO --delete public/balajisivaraman/ balaji@balajisivaraman.com:/home/user-data/www/default/
