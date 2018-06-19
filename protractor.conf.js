exports.config = {
    specs: ['./feature-tests/**/*.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    framework: 'mocha',
    onPrepare: function() {
        var chai = require('chai'); // chai
        var chaiAsPromised = require("chai-as-promised"); // deal with promises from protractor
        chai.use(chaiAsPromised); // add promise candy to the candy of chai
        global.chai = chai; // expose chai globally
    },
    mochaOpts: {
        timeout: 10000
    }
};