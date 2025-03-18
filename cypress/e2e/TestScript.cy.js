import { it } from "mocha";

describe('Scenario Test Landing Page', () => 
{
  //Positive Case
  it('Access Link', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')
  });

  it('Login with Correct Credential (Organization) ', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedis')
      .wait(200)
      .type('{enter}');
  });

  it('Input With Correct Email and Password', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedis')
      .wait(200)
      .type('{enter}');
    cy.get('#id')
      .type('qa-rec@nexmedis.com')
      .wait(200);
    cy.get('#password')
      .type('password1234')
      .wait(200);
    cy.get('.btn').click();
    cy.wait(500);
    cy.get('.header > h1').should('contain','Fasyankes Anda');
    cy.get('.red')
      .click()
      .wait(200);
    cy.get('.button-wrapper > .red').click()
  });

  it(' Try to access Link Forgot Password', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedis')
      .wait(200)
      .type('{enter}');
    cy.get('[style="text-align: right; width: 100%; margin: 10px 0px;"]').click();
    cy.wait(1000);
  });

  //Negative Cases
  it('Input Wrong Organization ID', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedist')
      .wait(200)
      .type('{enter}');
    cy.get('.dialog-content');
    cy.get('h2').should('contain','Gagal');
    cy.get('h4').should('contain','ID Organisasi/Perusahaan tidak valid. Silahkan ulangi kembali.');
    cy.wait(500);
    cy.get('.button-wrapper > .solid').click();
  });

  it('Input Wrong Email', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedis')
      .wait(200)
      .type('{enter}');
    cy.get('#id')
      .type('qa-rec@nexmedist.com')
      .wait(200);
    cy.get('#password')
      .type('password1234')
      .wait(200);
    cy.get('.btn').click();
    cy.wait(500);
  });

  it('Input Wrong Password', () => 
  {
    //Arrange
    cy.visit('https://stg-app.nexmedis.com/');

    //Assert
    cy.get('.title').should('contain','Sistem informasi kesehatan terpadu untuk pelayanan medis');
    cy.get('.subtitle').should('contain','Healthcare Management Software')

    //Act
    cy.get('#id')
      .type('official_nexmedis')
      .wait(200)
      .type('{enter}');
    cy.get('#id')
      .type('qa-rec@nexmedis.com')
      .wait(200);
    cy.get('#password')
      .type('password12345')
      .wait(200);
    cy.get('.btn').click();
    cy.wait(500);
  });
})