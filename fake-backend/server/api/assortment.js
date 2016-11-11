'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'assortment',
    urls: [{
        requests: [
            { response: '/json-templates/assortment.json' }
        ]
    }]
});
