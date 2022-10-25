describe('Calculator App', () => {
  it('Should visit the Home Link', () => {
    cy.visit('/')
  })

  it('Should check the router', () => {
    cy.visit('/')

    cy.contains('HomeFC').should('have.class', 'active')
    cy.contains('CalculatorCL')
      .click()
      .should('have.class', 'active')
    cy.contains('Settings')
      .click()
      .should('have.class', 'active')
    cy.contains('Home (FC)')
      .click()
      .should('have.class', 'active')
  })

  /*it('Should check the work of addition', () => {
    cy.get('form input').should('have.value', '0')

    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()

    cy.get('form input').should('have.value', '3')
  })

  it('Should add to history', () => {
    cy.get('section h3').contains('1+2')
    cy.get('section h3').should('have.length', 1)
  })

  it('Should clear input value', () => {
    cy.get('form input').should('have.value', '3')
    cy.get('button').contains('C').click()
    cy.get('form input').should('have.value', '0')
  })

  it('Should check the work of subtraction', () => {
    cy.get('button').contains('C').click()
    cy.get('form input').should('have.value', '0')

    cy.get('button').contains('2').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('=').click()

    cy.get('form input').should('have.value', '1')
  })

  it('Should check the work of multiplication', () => {
    cy.get('button').contains('C').click()
    cy.get('form input').should('have.value', '0')

    cy.get('button').contains('2').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()

    cy.get('form input').should('have.value', '4')
  })

  it('Should check the work of division', () => {
    cy.get('button').contains('C').click()
    cy.get('form input').should('have.value', '0')

    cy.get('button').contains('9').click()
    cy.get('button').contains('/').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()

    cy.get('form input').should('have.value', '3')
  })

  it('Should check the remainder of the division', () => {
    cy.get('button').contains('C').click()
    cy.get('form input').should('have.value', '0')

    cy.get('button').contains('3').click()
    cy.get('button').contains('%').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()

    cy.get('form input').should('have.value', '1')
    cy.get('button').contains('C').click()
  })

  it('Should clear history', () => {
    cy.contains('Settings (FC)').click()
    cy.contains('Clear History').click()
    cy.contains('Home (FC)').click()
    cy.get('section h3').should('have.length', 0)
  })

  it('Should change theme in redux store', () => {
    cy.contains('Settings (FC)').click()

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: false,
        },
        theme: {
          isLightTheme: true,
        },
      })

    cy.contains('Switch Theme').click()

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: false,
        },
        theme: {
          isLightTheme: false,
        },
      })

    cy.contains('Switch Theme').click()

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: false,
        },
        theme: {
          isLightTheme: true,
        },
      })
  })

  it('Should toggle mobileMenu in redux store', () => {
    cy.viewport('iphone-6')

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: false,
        },
        theme: {
          isLightTheme: true,
        },
      })

    cy.get('button[data-testid="burger"]').click()

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: true,
        },
        theme: {
          isLightTheme: true,
        },
      })

    cy.get('button[data-testid="burger"]').click()

    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        calculator: {
          inputValue: '0',
          isOperationFinish: false,
          history: Array(0),
          isError: null,
        },
        mobileMenu: {
          isMobileMenuOpen: false,
        },
        theme: {
          isLightTheme: true,
        },
      })

    cy.viewport(1000, 660)
  })*/
})

export {}
