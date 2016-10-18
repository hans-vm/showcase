'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.login', [
        require('angular-ui-router'),
        require('angular-cookies')
    ])
    .config(require('./route'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .factory('UserService', require('../signup/services/UserService'))
    .name;
