all:
	@echo Please pick a target

clean:
	rm -rf public/bytesandwords

serve:
	hugo server -D -w -c content/ --config config.toml -d public/bytesandwords/

push:
	git push origin master

build:
	hugo -c content/ --config config.toml -d public/bytesandwords/
