describe('Healthcheck', () => {

    it('should retrieve all booking IDs', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });

  
  function getBookingById(bookingId) {

    return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/${bookingId}`);
  
  }
  
  describe("Custom Functions for API Testing with Cypress", () => {
  
    it("Retrieves booking details for a specific ID", () => {
  
      getBookingById(1).then((response) => {
  
        expect(response.status).to.eq(200);
  
        expect(response.body).to.have.property("bookingid", 1);
  
      });
  
    });
  
  });
  

 describe("post new booking", () => {

  it("POST API testing", () => {
    cy.request("POST", "https://restful-booker.herokuapp.com/booking",{
      firstName: "jack",
      lastName: "richards",
    }) .should((response) => {
      expect(respose.status).to.eq(201);
    });
  
  });
 });

 describe("update booking", () => {

    it("PUT API testing", () => {
        cy.request("PUT", "https://restful-booker.herokuapp.com/booking/:id", {
            firstName: "John",
            lastName:"Frost",
        }).should((response) => { 
          expect(response.status).to.eq(200);

        });
    });  
 });
 
 describe("DELETE API booking", () => {

  it("Should DELETE API booking", () => {
    cy.request("DELETE","https://restful-booker.herokuapp.com/booking/1").should((respones) =>{
      expect(response.status).to.eq(204);
  });
 });
});