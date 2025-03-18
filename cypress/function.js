if (cy.get('#ext-gen298').should('contain','Peringatan')) 
{
    cy.get('#ext-gen298').should('contain','Peringatan').type('{enter}');
}