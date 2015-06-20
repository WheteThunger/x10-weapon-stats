(function() {
    'use strict';

    angular.module('items')
        .controller('ItemListController', ItemListController);

    function ItemListController(itemsModel) {
        var vm = this;
        vm.items = [];

        activate();

        function activate() {
            itemsModel.getItems()
                .then(function (itemData) {
                    vm.items = itemData;
                    return vm.items;
                })
                .catch(function () {

                });
        }

    }

})();
