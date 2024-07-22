import React from "react";

describe('Application Test Suite', () => {
    it('Checking Header', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid=bannerHeading]')
        .should('exist')
        .should('have.text', 'The New York Times');
    })

    it('Render Articles', () => {
        cy.visit('http://localhost:3000/');
        cy.intercept({
            method: "GET",
            url: 'https://api.nytimes.com/svc/mostpopular/**',
        }).as('getArticles');
        cy.wait(4000);
        cy.get('[data-testid^="articleItem]').should('exist');
    });

})