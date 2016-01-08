requirejs.config({
	paths: {
		angular: '../vendor/angular/angular',
		jquery: '../vendor/jquery/dist/jquery.min',
		domReady: '../vendor/requirejs-domready/domReady'
	},
	
	shim: {
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		}
	}
});

require(['angular', 'domReady', 'app'], function(angular, domReady, app) {
	domReady(function() {
		angular.bootstrap(document, ['MyApp']);
	});
});
