// @ts-check
// @ts-ignore
const { Plugin } = require('powercord/entities');
const { join } = require('path');
// @ts-ignore
const { readdirSync, mkdirSync } = require('fs');
module.exports = class WasmCord extends Plugin {
	commands = [];
	async startPlugin() {
		const dir = join(__dirname, 'plugins');
		mkdirSync(dir);
		for (const directory of readdirSync(dir)) {
			try {
				let plugin = require(join(dir, directory, 'plugin'));
				await plugin.default('');
				let data = JSON.parse(plugin.plugin());
				for (const command of data) {
					command['executor'] = (input) => {
						let res = JSON.parse(plugin[command.command](input.join(' ')));
						return res;
					};
					this.commands.push(command);
					console.log('[WasmCord]', 'Loaded', command.command);

					// @ts-ignore
					powercord.api.commands.registerCommand(command);
				}
			} catch (e) {
				console.error(`[WasmCord] Failed to load a plugin`, e);
			}
		}
	}

	pluginWillUnload() {
		for (const command of this.commands) {
			// @ts-ignore
			powercord.api.commands(command.command);
		}
	}
};
