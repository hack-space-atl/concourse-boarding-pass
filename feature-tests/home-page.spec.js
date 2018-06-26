describe('Concourse App', function() {
    it('displays home page', async () => {
        browser.ignoreSynchronization = true;

        browser.get('/');

        const title = element(by.css('h1.App-title'));

        expect(title.getText()).toEqual('Concourse Boarding Pass');
    });
});