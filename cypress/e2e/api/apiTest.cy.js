describe('API Testing with Cypress', () => {
    it('GET all posts', () => {
        cy.request('http://localhost:3000/posts')
          .then((response) => {
            expect(response.status).to.eq(200) // check status code
            expect(response.body).to.have.length.greaterThan(0) // check body is not empty
          })
    })
    
    it('POST a post', () => {
        cy.request('http://localhost:3000/posts', {
            Name: 'John',
            NickName: 'bob',
            userid: 6
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body.Name).to.eq('John')
        })
    })

    it('PATCH a post', () => {
        cy.request('http://localhost:3000/posts/efff', {
            NickName: 'bobby',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')
            expect(response.body.NickName).to.eq('bobby')
        })
    })

    it('PUT a post', () => {
        cy.request('http://localhost:3000/posts/13de', {
            Name: 'Kraken',
            NickName: 'Mariners',
            userid: 10
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userid')
            expect(response.body.NickName).to.eq('Mariners')
        })
    })

})