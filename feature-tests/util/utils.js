module.exports = {

    shouldEqualText: (element, text) => {
        expect(element.getText()).toEqual(text);
    },

    shouldContainText: (element, text) => {
        expect(element.getText()).toContain(text);
    },

    shouldEqualInputValue: (element, value) => {
        expect(element.getAttribute('value')).toEqual(value);
    },

    navigateToInstallPage: () => {
        element(by.css('button:nth-child(2)')).click();
    },

    navigateToConfigurePage: () => {
        element(by.css('button:first-child')).click();
    },

    inputText: (element, text) => {
        element.click();
        element.sendKeys(text);
    },

    getSelectOption: (selectIdentifier, index, value) => {
        return element.all(by.cssContainingText(`${selectIdentifier} .item`, value)).get(index);
    },
};

// export const random = () => {
//     console.log("helloooo");
// };
