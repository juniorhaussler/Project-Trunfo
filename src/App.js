import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateStateSources = this.validateStateSources.bind(this);
    this.verifyAttr = this.verifyAttr.bind(this);
    this.activeDesableButton = this.activeDesableButton.bind(this);
    this.clearCard = this.clearCard.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      imageSource: '',
      rarity: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, imageSource,
      cardAttr1, cardAttr2, cardAttr3, rarity, trunfo } = this.state;
    const card = {
      name: cardName,
      description: cardDescription,
      img: imageSource,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      rarityLevel: rarity,
      isTrunfo: trunfo,
    };
    this.setState(({ deck }) => ({
      deck: [...deck, card],
    }), () => this.clearCard());

    if (trunfo === true) {
      this.setState(() => ({
        hasTrunfo: true,
      }));
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const control = !this.activeDesableButton();
      this.setState({ isSaveButtonDisabled: control });
    });
  }

  clearCard() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      imageSource: '',
      rarity: 'normal',
    });
  }

  activeDesableButton() {
    return this.validateStateSources() && this.verifyAttr();
  }

  validateStateSources() {
    const { cardName, cardDescription, imageSource,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    console.log(cardName.length, cardDescription.length, imageSource.length);
    return cardName.length > 0
    && cardDescription.length > 0
    && imageSource.length > 0
    && cardAttr1.length > 0
    && cardAttr2.length > 0
    && cardAttr3.length > 0;
  }

  verifyAttr() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    console.log(`O valor do atributo 1 ??: ${cardAttr1}`);
    console.log(`O valor do atributo 2 ??: ${cardAttr2}`);
    console.log(`O valor do atributo 3 ??: ${cardAttr3}`);
    console.log(`A soma dos atributos ??: ${sum}`);
    const zero = 0;
    const maxAttrPoints = 90;
    const totalPoints = 210;
    return (cardAttr1 >= zero && cardAttr1 <= maxAttrPoints)
    && (cardAttr2 >= zero && cardAttr2 <= maxAttrPoints)
    && (cardAttr3 >= zero && cardAttr3 <= maxAttrPoints)
    && (sum <= totalPoints);
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      imageSource,
      rarity,
      trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="app">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ imageSource }
            cardRare={ rarity }
            cardTrunfo={ trunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="card">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ imageSource }
              cardRare={ rarity }
              cardTrunfo={ trunfo }
            />
          </div>
        </div>
        <div>
          {deck.map((card, index) => (
            <div key={ index }>
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr1 }
                cardAttr2={ card.attr2 }
                cardAttr3={ card.attr3 }
                cardImage={ card.img }
                cardRare={ card.rarityLevel }
                cardTrunfo={ card.isTrunfo }
              />
              <button type="button" data-testid="delete-button">Excluir</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
