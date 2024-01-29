describe('App components functioning correctly', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('Heading Loads', ()=>{
    cy.get('h1').should('contain','Movieland')
  })

  it('On Page Load Shows Some Movies', () => {
    cy.get('.movie').should('have.length.greaterThan', 1)
  })

  it('Search Bar Input should be empty on page Load', ()=>{
    cy.get('input').should('have.value', '')
  })

  it('Search Bar Input updates with text entry', ()=>{
    const data = 'dd'
    cy.get('input').type(data)
    cy.get('input').should('have.value', data)
  })

  it('Search icon Loads', ()=>{
    cy.get('img[alt="Search"]')
  })

  it('Search Icon onClick Triggers No Movies to Load', ()=>{
    const searchIcon = 'img[alt="Search"]'
    const data = 'd'
    cy.get('input').type(data)
    cy.get(searchIcon).click()
    cy.get('.movie').should('have.length.lessThan', 1)
  })

  it('Search Icon onClick Triggers Movies to Load', ()=>{
    const searchIcon = 'img[alt="Search"]'
    const data = 'dog'
    cy.get('input').type(data)
    cy.get(searchIcon).click()
    cy.get('.movie').should('have.length.greaterThan', 1)
  })
})