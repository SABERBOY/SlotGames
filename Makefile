all:
	make build

clean:
	rm -rf $(GO_OUT_DIR)    

build:
	python3 Test.py --build
.PHONY: build

download:
	python3 Test.py --download
.PHONY: download

convert:
	python3 Test.py --convert
.PHONY: convert

decode:
	python3 Test.py --decode
.PHONY: decode

patch:
	python3 auto_patch.py
.PHONY: patch

govulncheck:
	go install golang.org/x/vuln/cmd/govulncheck@latest
	govulncheck --show verbose ./...
.PHONY: govulncheck