import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="divCardContainer">
        <div className="divBackground">
          <div className="divContent">
            <span className="cardName" data-testid="name-card">{cardName}</span>
            <div className="img">
              <img
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
            </div>
            <p data-testid="description-card">
              { cardDescription }
            </p>
            <div>
              <p data-testid="attr1-card">
                Attr 01 ...............
                { cardAttr1 }
              </p>
              <p data-testid="attr2-card">
                Attr 02 ...............
                { cardAttr2 }
              </p>
              <p data-testid="attr3-card">
                Attr 03 ...............
                { cardAttr3 }
              </p>
              <p data-testid="rare-card">
                { cardRare }
                {
                  cardTrunfo === true ? <p data-testid="trunfo-card"> Super Trunfo </p>
                    : <p> </p>
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
