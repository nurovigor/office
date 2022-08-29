const CracoLinariaPlugin = require('craco-linaria3');

module.exports = {
	plugins: [
		{
			plugin: CracoLinariaPlugin,
			options: {
				rules: [{ action: require('@linaria/shaker').default }],
				displayName: true,
				sourceMap: true
			}
		}
	]
};
