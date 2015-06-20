(function() {
    'use strict';

    angular
        .module('search')
        .directive('search', searchDirective);

    function searchDirective() {
        return {
            restrict: 'E',
            controller: 'SearchController',
            controllerAs: 'searchCtrl',
            templateUrl: 'js/app/search/search.html',
            scope: {
                searchTerm: '='
            }
        };
    }

})();
