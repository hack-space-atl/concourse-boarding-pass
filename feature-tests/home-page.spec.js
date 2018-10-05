describe('Concourse App', function () {
    beforeEach(() => {
        browser.ignoreSynchronization = true;

        browser.get('/');
    });

    it('displays home page', async () => {
        const title = element(by.css('h1.App-title'));

        expect(title.getText()).toEqual('Concourse Boarding Pass');
    });

    it('redirects users to the set up page', async () => {
        element(by.css('button:first-child')).click();

        expect(element(by.css('h2')).getText()).toEqual('Configuration');
    });

    it('redirects users to the installation page', async () => {
        element(by.css('button:nth-child(2)')).click();

        expect(element(by.css('.install')).getText()).toContain('Need help installing Concourse?');
    });

    it('redirects users to the set up page from the installation page', async () => {
        element(by.css('button:nth-child(2)')).click();

        element(by.css('.installed-concourse')).click();

        expect(element(by.css('h2')).getText()).toEqual('Configuration');
    });


    // a new start

    fit('Successfully creates one or more resources', async () => {
        element(by.css('button:nth-child(1)')).click();

        element(by.css('.resourceName input')).sendKeys('my-resource');
        element(by.css('.typeDropdown')).click();
        element(by.css('button.addResource')).click();

        expect(element(by.cssContainingText('.resource', 'Resource 1')).isPresent()).toBe(true);
        expect(element(by.cssContainingText('.resource', 'Resource 2')).isPresent()).toBe(true);
    });

});