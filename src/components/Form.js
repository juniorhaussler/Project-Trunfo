import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Adicionar uma carta</h2>
        <form>
          <label htmlFor="cardName">
            Nome
            <input type="text" name="cardName" data-testid="name-input" required />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <input
              type="text"
              name="cardDescription"
              data-testid="description-input"
              required
            />
          </label>
          <label htmlFor="cardAttr1">
            Atrr01
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              required
            />
          </label>
          <label htmlFor="cardAttr2">
            Atrr02
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              required
            />
          </label>
          <label htmlFor="cardAttr3">
            Atrr03
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              required
            />
          </label>
          <label htmlFor="imageSource">
            Imagem
            <input type="text" name="imageSource" data-testid="image-input" required />
          </label>
          <select name="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="trunfo">
            <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
