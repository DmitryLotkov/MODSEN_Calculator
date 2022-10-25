describe('Calculator App', () => {
  it('Should visit the Home Link', () => {
    cy.visit('/')
  })

  it('Should check the router', () => {
    cy.visit('/')

    cy.contains('HomeFC').should('have.class', 'active')
    cy.contains('HomeCL')
      .click()
      .should('have.class', 'active')
    cy.contains('Settings')
      .click()
      .should('have.class', 'active')
    cy.contains('HomeFC').click()
  })
  it('Should check the performance of the calculator arithmetic operation addition', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('5').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '7')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator arithmetic operation subtraction', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('-').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '-3')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator arithmetic operation division', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('2').click()
    cy.get('button').contains('\\').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '1')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator arithmetic operation multiplication', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('2').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '4')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator arithmetic operation remainder %', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('7').click()
    cy.get('button').contains('%').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '1')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator arithmetic operations with using parenthesis', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('.').click()
    cy.get('div[id=screenValue]').should('have.text', '0.')
    cy.get('button').contains('3').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '1.300')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should check the performance of the calculator function add decimal point', () => {
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')

    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('5').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '20')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should add items to history', () => {
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('Clear history')
    cy.get('button').contains('7').click()
    cy.get('button').contains('%').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('7%3')
    cy.get('button').contains('7').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('7+3')
  })

  it('Should clean history', () => {
    cy.get('section[id=historyContainer]')
      .contains('Clear history')
      .click()
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('Clear history')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
  })

  it('Should be deleted the last digit of evaluated expression', () => {
    cy.get('button').contains('1').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()
    cy.get('div[id=result]').should('have.text', '3')
    cy.get('button').contains('C').click()
    cy.get('button').contains('CE').click()
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')
    cy.get('section[id=historyContainer]')
      .contains('Clear history')
      .click()
  })

  it('Should change app theme', () => {
    cy.contains('Settings').click()
    cy.get('select').select('Dark Theme')
    cy.get('section[id=settingsSection]').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
    )
    cy.get('select').select('Light Theme')
    cy.get('section[id=settingsSection]').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    )
    cy.get('select').select('Colored Theme')
    cy.get('section[id=settingsSection]').should(
      'have.css',
      'background-color',
      'rgb(192, 108, 132)',
    )
    cy.get('select').select('Light Theme')
  })

  it('Should clear all function (history, evaluated value and expression)', () => {
    cy.contains('HomeFC').click()
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('Clear history')
    cy.get('button').contains('1').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('=').click()
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('1-2')
    cy.get('div[id=screenValue]').should(
      'have.text',
      '1-2=',
    )
    cy.get('div[id=result]').should('have.text', '-1')
    cy.contains('Settings').click()
    cy.get('button').contains('Clear All History').click()
    cy.contains('HomeFC').click()
    cy.get('div[id=screenValue]').should('have.text', '0')
    cy.get('div[id=result]').should('have.text', '')
    cy.get(
      'section[id=historyContainer]:last-child',
    ).contains('Clear history')
  })
})

export {}
