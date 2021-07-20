EMCC_FLAGS= --no-entry --pre-js init.js -Oz -s MODULARIZE -s ENVIRONMENT=node -lnodefs.js main.c

.PHONY: build
build:
	rm -rf dist || true
	mkdir dist

	emcc $(EMCC_FLAGS) -o dist/wasm.build.js
	emcc $(EMCC_FLAGS) -o dist/wasm.closure.js --closure 1 -s USE_CLOSURE_COMPILER
