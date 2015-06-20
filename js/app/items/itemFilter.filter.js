(function() {
    'use strict';

    angular.module('items')
        .filter('itemFilter', itemFilter);

    function itemFilter() {
        return function(list, name) {
            return list.filter(function (item) {
                return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
            });
        };
    }

})();
