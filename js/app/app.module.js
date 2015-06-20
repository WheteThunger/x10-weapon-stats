(function() {
    'use strict';

    angular
        .module('statsApp', [
            'ui.router',
            'search',
            'items'
        ])
        .constant('ENDPOINT_URI', '/api/v1/')
        .config(appConfig);

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/equipped');

        $stateProvider
            .state('equipped', {
                url: '/equipped'
            })
            .state('search', {
                url: '/search/:term'
            });
    }

})();
