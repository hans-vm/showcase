'use strict';

module.exports = GroupItem;

/**
 * @ngInject
 */
function GroupItem() {
    return {
        template: require('./GroupItem.tpl.jade'),
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: function(){
        },
        controllerAs: 'vm',
        bindToController: true
    };
}
