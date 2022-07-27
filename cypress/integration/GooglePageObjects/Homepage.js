/// <reference types="cypress" />

export class HomePage {
    
    
constructor(){
        //this is where you define all of your xpath locator
        this.searchField = '//*[@name="q"]'
        this.searchButton = '//*[@name="btnK"]'
        this.timeout = 8000}
        
        navigateToHome(){
            cy.visit('https://www.google.com')
        }//end of method
       
        //method to type on search field
        typeOnSearchField(uservalue){
            cy.xpath(this.searchField,{timeout: this.timeout}).type(uservalue)
        }//end of method
        
        //method to click on search button
        clickOnSearchButton(){cy.xpath(this.searchButton,{timeout: this.timeout}).eq(0).click()
    }//end of method}
}//end of class