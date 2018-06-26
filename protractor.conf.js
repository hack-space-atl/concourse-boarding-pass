exports.config = {
    specs: ['./feature-tests/**/*.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine'
};