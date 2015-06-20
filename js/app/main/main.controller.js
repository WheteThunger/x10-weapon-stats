(function() {
    'use strict';

    angular.module('statsApp')
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.searchTerm = '';
    }

})();
