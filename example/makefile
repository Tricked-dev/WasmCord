build: 
	yarn > /dev/null && \
	rm -rf plugin && \
	wasm-pack build --target web --no-typescript -d plugin --out-name plugin && \
	yarn esbuild plugin/plugin.js \
		--outfile=plugin/plugin.js \
		--platform=node \
		--sourcemap=inline \
		--target=es2020 \
		--format=cjs \
		--allow-overwrite && \
	node build.js && \
	rm plugin/package.json && \
	rm plugin/.gitignore && \
	mv plugin/plugin_bg.wasm plugin/plugin.wasm