describe('Wikipedia', () => {
    it('Search', () => {
        //Variables
        const googleUrl = 'http://google.com';
        const wikipediaUrl = 'https://es.wikipedia.org/wiki/Wikipedia:Portada';
        const inputGoogle = $('.gLFyf');
        const linkWikipedia = $('//h3[@class="LC20lb DKV0Md"]');

        //Enter google
        browser.url(googleUrl);

        //Verify title google
        expect(browser).toHaveTitle('Google');

        //Enter "Wikipedia" inside the input
        inputGoogle.setValue('Wikipedia');

        //Press "Enter" key
        browser.keys(['Enter']);

        //Click on the first link with the classes LC20lb DKV0Md
        linkWikipedia.click();

        //Validation URL
        if (browser.getUrl() === wikipediaUrl) {
            console.log('----------------------SUCCESSFULY-----------------------------');
        } else {
            throw new Error('ERROR');
        }
    });
});
