let utils;

describe('App', () => {
    beforeAll(() => {
        utils = require('./util/utils');
    });

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('/');
    });

    describe('Home Page', () => {
        it('Should successfully display the home page', async () => {
            const title = element(by.css('h1.App-title'));
            utils.shouldEqualText(title, 'Concourse Boarding Pass');
        });

        it('Should redirect users to the set up page when they indicate they have already installed Concourse', async () => {
            utils.navigateToConfigurePage();

            let configurePage = element(by.css('.configuration'));
            utils.shouldContainText(configurePage, 'Configuration');
        });

        it('Should redirect users to the installation page when they indicate they have not installed Concourse', async () => {
            utils.navigateToInstallPage();

            let installPage = element(by.css('.install'));
            utils.shouldContainText(installPage, 'Need help installing Concourse?');
        });

        it('Should redirect users to the set up page from the installation page after they indicate Concourse has been installed', async () => {
            utils.navigateToInstallPage();

            let concourseInstalledButton = element(by.css('.installed-concourse'));
            concourseInstalledButton.click();

            let configurePage = element(by.css('.configuration'));
            utils.shouldContainText(configurePage, 'Configuration');
        });
    });

    describe('Configure Page', () => {
        beforeEach(() => {
            utils.navigateToConfigurePage();
        });

        fit('Should successfully create one or more resources', async () => {
            utils.shouldContainText(element(by.css('.resource')), 'Resource 1');

            let resourceName = element.all(by.css('input.resourceName')).get(0);
            utils.inputText(resourceName, 'my-resource');

            utils.shouldEqualInputValue(resourceName, 'my-resource');

            let resourceType = element.all(by.css('.resourceType')).get(0);
            resourceType.click();

            utils.getSelectOption('.resourceType', 0, 's3').click();

            let addResourceButton = element(by.css('button.addResource'));
            addResourceButton.click();

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

        it('Should successfully create a GET step', async () => {
            element.all(by.css('.jobSteps')).get(0).click();
            element.all(by.cssContainingText('.jobSteps .item', 'Get')).get(0).click();

            expect(element(by.cssContainingText('.jobStep', 'get')).isPresent()).toBe(true);

            //todo use this when testing the get step
            //element.all(by.css('.getStep')).get(0).click();
            // element.all(by.cssContainingText('.jobSteps .item', 'my-resource')).get(0).click();
        });
    });
});


