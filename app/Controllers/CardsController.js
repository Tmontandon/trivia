import { appState } from "../AppState.js"
import { Card } from "../Models/Card.js"
import { cardsService } from "../Services/CardsService.js"
import { setHTML } from "../Utils/Writer.js"


export class CardsController {
  checkAnswer(q) {
    cardsService.checkAnswer(q)
    console.log('yoaja');
  }

  constructor() {
    this.getCards()
    appState.on('cards', _drawCards)
  }

  async getCards() {

    try {
      await cardsService.getCards()
    } catch (error) {
      console.error(error, 'try catch error')
    }
  }


}

function _drawCards() {
  let template = ''
  appState.cards.forEach(c => template += c.CardTemplate)
  setHTML('api-trivia', template)
}
