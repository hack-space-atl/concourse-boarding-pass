exports.config = {
    specs: ['./feature-tests/**/*.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3006',
    framework: 'jasmine'
};