all:
	make build

clean:
	rm -rf $(GO_OUT_DIR)    

build:
	python Test.py --build
.PHONY: build

download:
	python Test.py --download
.PHONY: download

convert:
	python Test.py --convert
.PHONY: convert

decode:
	python Test.py --decode
.PHONY: decode

govulncheck:
	go install golang.org/x/vuln/cmd/govulncheck@latest
	govulncheck --show verbose ./...
.PHONY: govulncheck