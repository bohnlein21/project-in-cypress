import 'cypress-iframe'

function websiteFrames() {
    cy.visit('https://demoqa.com/frames');
}





describe('single frame test', function () {
    
    it('passes',function () {

        websiteFrames();

        cy.frameLoaded('.demo-frame');

        cy.iframe().find('#frame1').then(function(txt) {
            const txtframe = txt.text();
            expect(txtframe).to.contain('This is a simple page');
            cy.log(txtframe);
        
        })
    });
});


describe('single frame test', function () {
    
    it('passes',function () {

        websiteFrames();

        cy.frameLoaded('.demo-frame');

        cy.iframe().find('#frame2').then(function(txt) {
            const txtframe = txt.text();
            expect(txtframe).to.contain('This is a simple page');
            cy.log(txtframe);
        
        })
    });
});