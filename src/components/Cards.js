import React, {Component} from "react";
import { useState, useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Games from "../Games.json";
import Carousel from 'react-grid-carousel'




export default class Cards extends Component {
  render () {
  /*const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };*/

  return (
    <div className="cards">
      <h1>Classic Games!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Carousel cols={3} rows={1} gap={10} loop  className='cards__items'>
            {Games.map(game =>(
              <Carousel.Item>
              <CardItem
                name={game.Name}
                src={game.Image}
                text={game.Description}
                label={game.Genre}
                path="/"
              /></Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
}

