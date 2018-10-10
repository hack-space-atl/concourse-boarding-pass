beforeEach(() => {
    browser.ignoreSynchronization = true;

    browser.get('/');
});

describe('Concourse App', function () {
    it('Should successfully display the home page', async () => {
        const title = element(by.css('h1.App-title'));

        expect(title.getText()).toEqual('Concourse Boarding Pass');
    });

    it('Should redirect users to the set up page', async () => {
        element(by.css('button:first-child')).click();

        expect(element(by.css('h2')).getText()).toEqual('Configuration');
    });

    it('Should redirect users to the installation page', async () => {
        element(by.css('button:nth-child(2)')).click();

        expect(element(by.css('.install')).getText()).toContain('Need help installing Concourse?');
    });

    it('Should redirect users to the set up page from the installation page', async () => {
        element(by.css('button:nth-child(2)')).click();

        element(by.css('.installed-concourse')).click();

        expect(element(by.css('h2')).getText()).toEqual('Configuration');
    });
});

fdescribe('Configure Page', function () {
    beforeEach(() => {
        element(by.css('button:nth-child(1)')).click();
    });

    it('Should successfully create one or more resources', async () => {
        expect(element(by.cssContainingText('.resource', 'Resource 1')).isPresent()).toBe(true);

        element.all(by.css('input.resourceName')).get(0).sendKeys('my-resource');

        expect(element.all(by.css('input.resourceName')).get(0).getAttribute('value')).toEqual('my-resource');

        element.all(by.css('.resourceType')).get(0).click();
        element.all(by.cssContainingText('.resourceType .item', 'sh')).get(0).click();

        element(by.css('button.addResource')).click();

        expect(element(by.cssContainingText('.resource', 'Resource 2')).isPresent()).toBe(true);

        element.all(by.css('input.resourceName')).get(1).sendKeys('my-resource-2');
        expect(element.all(by.css('input.resourceName')).get(1).getAttribute('value')).toEqual('my-resource-2');

        element.all(by.css('.resourceType')).get(1).click();

        element.all(by.css('button.removeResource')).get(1).click();
        expect(element(by.cssContainingText('.resource', 'Resource 2')).isPresent()).toBe(false);
    });

    it('Should successfully create one or more jobs', async () => {
        element.all(by.css('input.resourceName')).get(0).sendKeys('my-resource');

        expect(element(by.cssContainingText('.job', 'Job 1')).isPresent()).toBe(true);

        element.all(by.css('input.jobName')).get(0).sendKeys('my-job');

        expect(element.all(by.css('input.jobName')).get(0).getAttribute('value')).toEqual('my-job');

        element(by.css('button.addJob')).click();

        expect(element(by.cssContainingText('.job', 'Job 2')).isPresent()).toBe(true);

        element.all(by.css('button.removeJob')).get(1).click();
        expect(element(by.cssContainingText('.job', 'Job 2')).isPresent()).toBe(false);
    });

    it('Should successfully create a GET step', async ()=> {
        element.all(by.css('.jobSteps')).get(0).click();
        element.all(by.cssContainingText('.jobSteps .item', 'Get')).get(0).click();

        expect(element(by.cssContainingText('.jobStep', 'get')).isPresent()).toBe(true);




        //todo use this when testing the get step
        // element.all(by.css('.jobSteps')).get(0).click();
        // element.all(by.cssContainingText('.jobSteps .item', 'my-resource')).get(0).click();
    });
});