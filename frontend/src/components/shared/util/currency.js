//Assumes that all users will be using GBP. Can perform conversion based on users browser locale 
//TBD - If required, perform conversion based on users browser locale instead
export function convertToLocalCurrency(value) {
    return value.toLocaleString('en-gb');
}


//Assumes that all funding will be in GBP.
//TBD - Perform conversion of currency for funding received and output currency.
export function getTotalCharityFunding(charity) {
    let totalFunding = 0;
      charity.grants.forEach(grant => {
        totalFunding = totalFunding + grant.amountAwarded;
      })
      return totalFunding;
  }


//Assumes that all funding will be in GBP.
//TBD - Possibly take currency as input and output with correct currency.
export function convertToDisplayFunding(currency) {
    if(currency > 0) {
      return '£' + convertToLocalCurrency(currency);
    }
    else return 'Not available';
  }
  
  
//Returns a percentage value of funding for income
export function getFundRatioToIncome(funding, income) {
    return Math.round((funding / income) * 100);
}

