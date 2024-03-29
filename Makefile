all:
	@echo Please pick a target

clean:
	rm -rf public/www
	rm -rf public/blog

serve_blog:
	hugo server -D -w -c content/blog/ --config config.toml -d public/blog/

serve_home:
	hugo server -D -w -c content/home/ --config config.toml -d public/home/

push:
	git push origin master

build:
	hugo -c content/home/ --config config.toml -d public/home/
	hugo -c content/blog/ --config config.toml -d public/blog/

deploy: clean build
	rsync -avzO --delete public/ balaji@balajisivaraman.com:/var/www/balajisivaraman.com/
