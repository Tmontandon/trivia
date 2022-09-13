
export class Card {

  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.cAnswer = data.correct_answer
    this.question = data.question
    this.color = data.color
  }

  get CardTemplate() {
    return `
            <div class="col-md-3 m-1 p-3 bg-dark text-light d-flex align-items-evenly elevation-1 rounded my-2 Iamsomad ${this.color}" ">
          <div>
            <div>
              Category: ${this.category}
            </div>
            <div class="my-1">
              Difficulty: ${this.difficulty}
            </div>
            <div class='mt-2 Iamsomad'>
              ${this.question}
            </div>
            <button class="btn btn-outline-primary" onclick="app.cardsController.checkAnswer('${this.question}')">Check?</button>
          </div>
        </div>
            `
  }
}