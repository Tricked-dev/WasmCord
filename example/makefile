name = texter
# Note changing this will break WasmCord
outfile = plugin
build: 
	yarn > /dev/null && \
	rm -rf ${name} && \
	wasm-pack build --target web --no-typescript -d ${name} --out-name ${outfile} && \
	sed -i 's/fetch(input)/require("fs").readFileSync(require("path").join(__dirname, "${outfile}.wasm"))/g' ${name}/${outfile}.js && \
	yarn -s esbuild ${name}/${outfile}.js \
		--outfile=${name}/${outfile}.js \
		--platform=node \
		--target=es2020 \
		--format=cjs \
		--minify \
		--allow-overwrite && \
	rm ${name}/package.json && \
	rm ${name}/.gitignore && \
	rm ${name}/README.md && \
	mv ${name}/${outfile}_bg.wasm ${name}/${outfile}.wasm
