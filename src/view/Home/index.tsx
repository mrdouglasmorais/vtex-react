import React, { useState, useEffect } from 'react';

import Cart from '../../assets/cart.png'

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

interface Test {
  cart: IProduct[]
}

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);
  

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);


  const handleCart = ( index: number ) => {
    let product = data[index]
    setCart(cart => [...cart,product]);
  }

  return(
    <Container>
      <div className="nav">
        <div>
          <img src="data:image/png;base64,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" alt="vtex" width="200px" height="auto" />
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="50px" height="auto" />
          <span>( {cart.length} ) - Itens</span>
        </div>
      </div>
      <section>
        { data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iphone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ () => handleCart(index)}> Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}

export default Home;