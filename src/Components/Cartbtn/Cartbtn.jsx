import React, { useContext } from 'react'
import styled from 'styled-components';
import style from './Cartbtn.module.css'
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function Cartbtn(props) {

  let proId = props.product_id;

  let { addProductToCart } = useContext(CartContext);
  async function addToCart(id) {
    let response = await addProductToCart(id);
    if (response.data.status == 'success') {
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }
  return (
    <StyledWrapper className='my-3'>
      <button onClick={() => { addToCart(proId) }} className="cssbuttons-io-button">
        <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor" />
        </svg>
        <span>Add to Cart</span>
      </button>
    </StyledWrapper>

  )
}


const StyledWrapper = styled.div`
  display: flex; 
  justify-content: center;
  .cssbuttons-io-button {
    display: flex;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #ad5389;
    background: linear-gradient(
      0deg,
      rgba(20, 167, 62, 1) 0%,
      rgba(102, 247, 113, 1) 100%
    );
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
  }

  .cssbuttons-io-button svg {
    margin-right: 6px;
  }

  .cssbuttons-io-button:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }

  .cssbuttons-io-button:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }`;


