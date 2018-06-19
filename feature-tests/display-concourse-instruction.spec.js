const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('no protractor at all', function() {
    it('should still do normal tests', function() {
        expect(true).to.equal(true);
    });
});

describe('display concourse installation instruction', function() {
    it('displays home page', async () => {
        browser.get('/');

        console.log("HELLO");
        const title = await element(by.css('h1')).getText();


        console.log("BYE");
        console.log("MY VALUE: ", title);

        expect(title.getText()).to.eventually.contain('An awesome title');
    });
});