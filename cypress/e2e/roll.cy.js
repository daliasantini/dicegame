describe('Rolling', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('clicking + triggers dice reroll (images randomization)', () => {
    //Store initial dice values
    cy.getByCy('dice1').invoke('attr', 'src').as('firstSrc1');
    cy.getByCy('dice2').invoke('attr', 'src').as('firstSrc2');

    //Click roll button
    cy.getByCy('roll-btn').click();

    //Assert dice 1 changed
    cy.get('@firstSrc1').then((firstSrc1) => {
      cy.getByCy('dice1', { timeout: 5000 })
        .invoke('attr', 'src')
        .should((newSrc1) => {
          expect(newSrc1).not.to.eq(firstSrc1);
        });
    });

    //Assert dice 2 changed
    cy.get('@firstSrc2').then((firstSrc2) => {
      cy.getByCy('dice2', { timeout: 5000 })
        .invoke('attr', 'src')
        .should((newSrc2) => {
          expect(newSrc2).not.to.eq(firstSrc2);
        });
    });
  });

  it('shows correct message depending on dice rolls', () => {
    cy.getByCy('roll-btn').click();

    cy.getByCy('message', { timeout: 5000 })
      .inovke('text')
      .then((msg) => {
        expect(['P1 Wins!', 'P2 Wins!', 'Draw!']).to.include(msg);
      });
  });
});
