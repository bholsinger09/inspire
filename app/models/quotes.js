
export default class QuotesModel {
  constructor(data) {
    this.author = data.quote.author
    this.quote = data.quote.body


  }
  get QuoteTemplate() {
    return `
    
  
    <p class = "quote">${this.quote}</p>
    <p class = "author">${this.author}</p>

    `
  }


}