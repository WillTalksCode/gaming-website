import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <div className='cards__item' id={props.id}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 className='cards__title__text'>{props.name}</h1>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;