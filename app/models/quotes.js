
export default class QuotesModel {
  constructor(data) {
    this.author = data.author
    this.quote = data.body


  }
  get ImageTemplate() {
    return `
    <div class = "row">
    <div class = "col">
    <p class = "quote">${this.quote}</p>


    </div>
    
    </div>
    
    
    
    `
  }


}