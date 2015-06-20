(function() {
    'use strict';

    angular
        .module('items')
        .directive('itemList', itemListDirective);

    function itemListDirective() {
        return {
            restrict: 'E',
            controller: 'ItemListController',
            controllerAs: 'itemsCtrl',
            templateUrl: 'js/app/items/itemList.html',
            scope: {
                searchTerm: '='
            }
        };
    }

})();
