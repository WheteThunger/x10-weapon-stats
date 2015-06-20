(function() {
    'use strict';

    angular
        .module('search')
        .controller('SearchController', SearchController);

    function SearchController($state) {
        var vm = this;

        vm.term = '';
        vm.search = search;

        function search() {
            $state.go('search', {
                term: vm.term
            });
        }
    }

})();
