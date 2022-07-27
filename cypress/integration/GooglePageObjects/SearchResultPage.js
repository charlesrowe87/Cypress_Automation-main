/// <reference types="cypress" />

export class SearchResultPage {


constructor(){
      //this is where you define all your xpath locators  
      this.searchResult = '//*[@id="result-stats"]'
      this.timeout = 8000
    }


    printSearchNumber(){
        cy.xpath(this.searchResult,{timeout: this.timeout}).then(($searchResultValue) => {
            let text = $searchResultValue.text();
            let arrayResult = text.split(' ');
            cy.log("Search number for " + userInfo + " is " + arrayResult[1]);
            cy.addContext("Search number for " + userInfo + " is " + arrayResult[1]);
          })//end of then
    }//end of method

}//end of class