(function() {
    'use strict';

    angular.module('items')
        .factory('itemsModel', itemsService);

    function itemsService($http, $q, ENDPOINT_URI) {

        return {
            getItems: getItems
        };

        function getItemsUrl() {
            //return ENDPOINT_URI + 'items';
            return 'js/app/items/itemDefinitions.json';
        }

        function getGraphUrl() {
            //return ENDPOINT_URI + 'graph';
            return 'js/app/items/itemGraph.json';
        }

        function processItems(itemData) {
            var items = itemData[0],
                instances = itemData[1],
                results;

            // temp
            instances = instances.filter(function (item) {
                return item.weapon_instance_attributes.length &&
                    item.weapon_instance_attributes.reduce(function (hasDescription, attribute) {
                        return hasDescription || attribute.description_string;
                    }, false);
            });

            results = instances.map(function (item, i) {
                var defindex = item.weapon_defindex,
                    itemDef = items[defindex];

                return {
                    id: item.id,
                    weapon_defindex: defindex,
                    name: itemDef.item_name,
                    imgUrl: itemDef.image_url,
                    attributes: item.weapon_instance_attributes
                };
            });

            return results.slice(0, 100);
        }

        function extractItemDefinitions(response) {
            var items = {};
            response.data.forEach(function(item, i) {
                items[item.defindex] = item;
            });
            return items;
        }

        function extractItemInstances(response) {
            return response.data.configs[0].people[0].weapon_instances;
        }

        function getItems() {
            //return $http.get('/js/fixture.json');

            var itemsPromise = $http.get(getItemsUrl()),
                instancesPromise = $http.get(getGraphUrl());

            return $q.all([
                itemsPromise
                    .then(extractItemDefinitions),
                instancesPromise
                    .then(extractItemInstances)
                ])
                .then(processItems)
                .catch(function (err) {
                    console.log('Error processing items');
                });
        }
    }

})();
