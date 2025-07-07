# Detect OS and set Python command
ifeq ($(OS),Windows_NT)
	PYTHON := python
else
	PYTHON := python3
endif

all:
	make build

clean:
	rm -rf $(GO_OUT_DIR)    

build:
	$(PYTHON) Test.py --build
.PHONY: build

download:
	$(PYTHON) Test.py --download
.PHONY: download

convert:
	$(PYTHON) Test.py --convert
.PHONY: convert

decode:
	$(PYTHON) Test.py --decode
.PHONY: decode

patch:
	$(PYTHON) auto_patch.py
.PHONY: patch

govulncheck:
	go install golang.org/x/vuln/cmd/govulncheck@latest
	govulncheck --show verbose ./...
.PHONY: govulncheck