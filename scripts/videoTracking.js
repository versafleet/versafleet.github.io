videojs('#thevideo', {}, function() {
	var player = this;
	player.ga({'gaLibrary' : 'analytics.js'}); // "load the plugin, by defaults tracks everything!!"
});	
