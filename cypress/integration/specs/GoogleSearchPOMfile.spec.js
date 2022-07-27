/// <reference types="cypress" />
import {HomePage} from '../../integration/GooglePageObjects/Homepage' 
import {SearchResultPage} from '../../integration/GooglePageObjects/SearchResultPage' 

describe('Google search reults for car', ()=> {

it('Navigate to Google home and search for a car', ()=>{
//create POM reference to call the methods 
    const homepage = new HomePage()
    //navigate to home page 
    homepage.navigateToHome()
    //enter car in search field
    homepage.typeOnSearchField("cars")
    //click on search button
    homepage.clickOnSearchButton()


})//end of test 1

it('Captures search results and prints out search number', ()=>{
    //create POM reference to call the methods 
    const searchresultpage = new SearchResultPage()
    searchresultpage.printSearchNumber('Cars')
    
    cy.wait(4000)

})//end of test 2

})//end of describe function
