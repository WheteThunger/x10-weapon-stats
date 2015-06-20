(function() {
    'use strict';

    angular.module('items')
        .filter('attrDescription', attributeDescriptionFilter);

    function attributeDescriptionFilter() {
        return function(attribute) {
            return attribute.description_string.replace(/%s([0-9]+)/, function (str, match) {
                var prefix = '',
                    val;

                //switch (attribute.effect_type) {
                //    case 'positive':
                //        prefix = '+';
                //        break;
                //    case 'negative':
                //        prefix = '-';
                //        break;
                //    default:
                //        prefix = '';
                //}

                val = match * attribute.attribute_value;

                if (attribute.attribute_value.indexOf('.') !== -1) {
                    val = val.toFixed(2);
                }

                return prefix + val;
            });
        };
    }

})();
