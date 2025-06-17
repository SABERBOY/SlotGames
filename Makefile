all:
	#make clean
	make build

clean:
	rm -rf $(GO_OUT_DIR)    

build:
	# make clean
	python Test.py --build
.PHONY: build

download:
	python Test.py --download
.PHONY: download

convert:
	python Test.py --convert
.PHONY: convert

govulncheck:
	go install golang.org/x/vuln/cmd/govulncheck@latest
	govulncheck --show verbose ./...
.PHONY: govulncheck