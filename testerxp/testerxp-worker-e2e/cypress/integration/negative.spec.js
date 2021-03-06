describe('Mantisby login', function() {
    it('Visits Mantisbt and click login', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt and error password', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("123")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt and error username ', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("                                                         123                                         fdgdf       [**")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt and error username wrong', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("prueba[~`^¨̣··──¸\\")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt and error password', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("                                                                                                                               ")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt and error password wrong', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("prueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("_[[__::;;**]]*¡¡??¨~~`^")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
    it('Visits Mantisbt Signup for a new account', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #1904')
    })
    it('Visits Mantisbt username wrong and Signup for a new account ans submit', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("[~`^¨̣··──¸\\")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #1904')
    })
    it('Visits Mantisbt username wrong and Signup for a new account generate code', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("[~`^¨̣··──¸\\")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Login').click()
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').contains('Login').click()
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
    })
    it('Visits Mantisbt username wrong and Signup for a new account new code an username', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("[~`^¨̣··──¸\\")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Generate a new code').click()
        cy.get('.login-container').contains('Login').click()
        cy.get('.login-container').contains('Signup for a new account').click()
        cy.get('.login-container').contains('Lost your password?').click()
        cy.get('.login-container').contains('Login').click()
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').contains('Your account may be disabled or blocked or the username/password you entered is incorrect.')
    })
}),
describe('Add Project', function() {
    it('Add Project submit', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Projects')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-inline').contains('Create New Project').click()
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.form-container').find('input[type="submit"]').click()
    })
    it('Add Project name empty', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Projects')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-inline').contains('Create New Project').click()
        cy.get('.form-container').find('input[name="name"]').click().type(" ")
        cy.get('.form-container').find('textarea[name="description"]').click().type("Ejemplo pruebas Automaticas")
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #702')
    })
    it('Add Project others', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Projects')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-inline').contains('Create New Project').click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = 'Pruebas Automaticas ' + id
        cy.get('.form-container').find('input[name="name"]').click().type(' ')
        cy.get('.form-container').find('select[name="status"]').select('release')
        cy.get('.form-container').find('input[name="inherit_global"]').check()
        cy.get('.form-container').find('input[name="inherit_global"]').check()
        cy.get('.form-container').find('select[name="view_state"]').select('private')
        cy.get('.form-container').find('input[name="inherit_global"]').check()
        cy.get('.form-container').find('input[name="inherit_global"]').check()
        cy.get('.form-container').find('select[name="view_state"]').select('public')
        cy.get('.form-container').find('select[name="status"]').select('stable')
        cy.get('.form-container').find('select[name="status"]').select('obsolete')
        cy.get('.form-container').find('input[name="name"]').click().type(' ')
        cy.get('.form-container').find('select[name="view_state"]').select('private')
        cy.get('.form-container').find('input[name="name"]').click().type(' ')
        cy.get('.form-container').find('select[name="view_state"]').select('public')
        cy.get('.form-container').find('textarea[name="description"]').click().type("Ejemplo pruebas Automaticas")
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #702')
    })
    it('Add Project exists', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Projects')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-inline').contains('Create New Project').click()
        cy.get('.form-container').find('input[name="name"]').click().type("Pruebas Automaticas 14074")
        cy.get('.form-container').find('textarea[name="description"]').click().type("Ejemplo pruebas Automaticas")
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #701')
    })
}),
describe('Create User', function() {
    it('Create User empty', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #805')
    })
    it('Create User only username wrong', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        cy.get('.form-container').find('input[name="username"]').click().type('¨~`^^^^')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #805')
    })
    it('Create User username empty', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const fullname = 'Nombre Pruebas Automaticas ' + id
        const email = 'nombrepa' + id + '@testerxp.com'
        cy.get('.form-container').find('input[name="username"]').click().type(" ")
        cy.get('.form-container').find('input[name="realname"]').click().type(fullname)
        cy.get('.form-container').find('input[name="email"]').click().type(email)
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #805')
    })
    it('Create User username exists', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const fullname = 'Nombre Pruebas Automaticas ' + id
        const email = 'nombrepa' + id + '@testerxp.com'
        cy.get('.form-container').find('input[name="username"]').click().type("master")
        cy.get('.form-container').find('input[name="realname"]').click().type(fullname)
        cy.get('.form-container').find('input[name="email"]').click().type(email)
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #800')
    })
    it('Create User real name wrong', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = 'NombrePA' + id
        const fullname = 'Nombre Pruebas Automaticas ' + id
        const email = 'nombrepa' + id + '@testerxp.com'
        cy.get('.form-container').find('input[name="username"]').click().type(testname)
        cy.get('.form-container').find('input[name="realname"]').click().type('~`^^^^`~~')
        cy.get('.form-container').find('input[name="email"]').click().type(email)
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #1200')
    })
    it('Create User email wrong', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Manage')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.nav').contains('Manage Users')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/'+href)
        })
        cy.get('.form-container').contains('Create New Account').click()
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = 'NombrePA' + id
        const fullname = 'Nombre Pruebas Automaticas ' + id
        const email = 'nombrepa' + id + '@testerxp.com'
        cy.get('.form-container').find('input[name="username"]').click().type(testname)
        cy.get('.form-container').find('input[name="realname"]').click().type(fullname)
        cy.get('.form-container').find('input[name="email"]').click().type('¨~~`^^^~@testerxp.com')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #1200')
    })
}),
describe('Report Issue', function() {
    it('Report Issue click', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Report Issue')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/'+href)
        })
        cy.get('.form-container').find('select[name="project_id"]').select('9').invoke('val')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[type="submit"]').click()
    })
    it('Report Issue summary empty', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Report Issue')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/'+href)
        })
        cy.get('.form-container').find('select[name="project_id"]').select('9').invoke('val')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[name="summary"]').click().type(' ')
        cy.get('.page-content').find('textarea[name="description"]').click().type('Que bug tan grande')
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #11')
    })
    it('Report Issue description empty', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Report Issue')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/'+href)
        })
        cy.get('.form-container').find('select[name="project_id"]').select('9').invoke('val')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[name="summary"]').click().type('este es un bug')
        cy.get('.page-content').find('textarea[name="description"]').click().type(' ')
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #11')
    })
    it('Report Issue Summary special characters', function() {
        cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/login_page.php')
        cy.get('.login-container').find('input[name="username"]').click().type("administrator")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.login-container').find('input[name="password"]').click().type("mantisbtprueba")
        cy.get('.login-container').find('input[type="submit"]').click()
        cy.get('.nav').contains('Report Issue')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit('http://lbmiso4208mantisbt2230-869d406e6bc0cec1.elb.us-east-1.amazonaws.com/mantis/'+href)
        })
        cy.get('.form-container').find('select[name="project_id"]').select('9').invoke('val')
        cy.get('.form-container').find('input[type="submit"]').click()
        cy.get('.page-content').find('input[name="summary"]').click().type('`````~~~~~¨¨¨¨¸̣̣̣̣···̣·̣·̣¨~~')
        cy.get('.page-content').find('textarea[name="description"]').click().type('Que berraco bug')
        cy.get('.page-content').find('input[type="submit"]').click()
        cy.get('.alert.alert-danger').contains('APPLICATION ERROR #11')
    })
})