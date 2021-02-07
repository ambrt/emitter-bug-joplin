import joplin from 'api';

joplin.plugins.register({
	onStart: async function() {
		console.info('Test plugin started!');
		await joplin.settings.registerSection('myTestCustomSection', {
			label: 'Test settings',
			iconName: 'fas fa-hand-point-left',
		});
		await joplin.settings.registerSetting('myTestCustomSetting', {
			value: true,
			type: 3,
			section: 'myTestCustomSection',
			public: true,
			label: 'Test setting for emmiter',
		});
		await joplin.settings.onChange(async ()=>{

			console.log("changed setting")
		})
	},
});
