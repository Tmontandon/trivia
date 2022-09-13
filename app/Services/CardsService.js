import { appState } from "../AppState.js";
import { Card } from "../Models/Card.js";
import { triviaServer } from "./AxiosService.js";

class CardsService {
  checkAnswer(question) {
    // Ahh Why does this thing have funky text!! Also will this if function vhange c.color to c.cAnswer??
    debugger
    if (appState.cards.find(c => c.question == question)) {
      appState.cards.find(c => c.cAnswer == c.color)

    }
    appState.emit('cards')


  }

  async getCards() {
    // debugger
    const res = await triviaServer.get('/api.php', {
      params: {
        amount: 10,
        type: 'boolean'
      }

      // / api.php ? amount = 10 & category=32
    })
    appState.cards = res.data.results
      .map(c => new Card(c))
    // console.log('yo!!');
    console.log(appState.cards);

    // }); (c => new Card(c));
    // console.log(ye);
    // console.log(appState.cards);
  }
}

export const cardsService = new CardsService()