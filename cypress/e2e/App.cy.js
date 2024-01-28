describe('Component Testing', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('Heading Loads', ()=>{
    cy.get('h1').should('contain','Movieland')
  })

  it('On Page Load Shows Some Movies', () => {
    cy.get('.movie').should('have.length.greaterThan', 1)
})})