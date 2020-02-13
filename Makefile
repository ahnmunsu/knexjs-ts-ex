.PHONY: all

all:
	npm i
	rm -rf ./output
	tsc
