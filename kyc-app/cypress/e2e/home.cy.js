/// <reference types="cypress" />
describe("KYC Application", () => {
  it("should open home page", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("KYC Login Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display login form", () => {
    cy.contains("Login")
      .should("be.visible");

    cy.get('input[placeholder="Enter your name"]')
      .should("be.visible");

    cy.get('input[placeholder="Enter your password"]')
      .should("be.visible");

    cy.get('button[type="submit"]')
      .should("be.visible");
  });

  it("should login successfully", () => {
    cy.get('input[placeholder="Enter your name"]')
      .type("anitha")
      .should("have.value", "anitha");

    cy.get('input[placeholder="Enter your password"]')
      .type("Test@123")
      .should("have.value", "Test@123");

    cy.get('button[type="submit"]')
      .should("be.visible")
      .should("be.enabled")
      .click();
  });
});