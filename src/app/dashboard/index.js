'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.dashboard', [
        require('angular-ui-router'),
        require('angular-cookies')
    ])
    .config(require('./route'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .factory('GroupService', require('./services/GroupService'))
    .directive('groupItem', require('./directives/GroupItem'))
    .name;
