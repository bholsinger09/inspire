
export default class QuotesModel {
  constructor(data) {
    this.author = data.quote.author
    this.quote = data.quote.body


  }
  get QuoteTemplate() {
    return `
    <div class = "row">
    <div class = "col">
    <p class = "quote">${this.quote}</p>


    </div>
    
    </div>
    
    
    
    `
  }


}