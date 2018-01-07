import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Button = styled.button`
  font-size:1.2em;
  color: white;
  border: none;
  bakground-color: #369;
  font-family:Mirosoft JhengHei;
  border-radios:4px;
  padding:6px 16px;
  cursor:pointer;
  &:hover{
  background-color:#48a;

  }
  @media (max-width:600 px){
      font-size:0.5em;
  }
  background-color:${props => (props.disabled ? '#c33' : '#369')};
`;

const HotProduct = styled(Product)`
      color: red;
`;

const PassworkInpt = styled.input.attrs({
  type: 'password',

})`
  font-size:1.5em;
  border: 1px solid gray;
  border-radius:10px;
`;

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <HotProduct
      title={product.title}
      price={product.price}
      inventory={product.inventory}
    />
    <Button
      onClick={onAddToCartClicked}
      disabled={product.inventory === 0}
    >
      {product.inventory === 0 ? '售完' : '購買'}
    </Button>
    <PassworkInpt type="password" />
  </div>
);

export default ProductItem;
