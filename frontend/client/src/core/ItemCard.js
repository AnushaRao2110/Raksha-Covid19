import React from 'react';
import Base from '../core/Base';
import imageHelper from './helper/imageHelper';
import {AddToCart, DeleteFromCart } from './helper/cartHelper';
import { isAuthenticated } from '../auth/helper/index';

const ItemCard = ({ item,
addToCart = true,
removeFromCart = false,
setReload = (f) => f,   // function(f){return f} 
reload = undefined
}) => {

    const itemName = item.name;

    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    const showAddToCart = ( addToCart ) => {
        return (
            addToCart && (
                <button
                onClick={() => {
                  AddToCart(userId, token, item._id);
                }}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        );
    }

    const showRemoveFromCart = ( removeFromCart ) => {
        return (
            removeFromCart && (
                <button
                onClick={() => {
                  DeleteFromCart(userId, token, item._id);
                  setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        {/* <div className="card-header lead">A photo from pexels</div> */}
        <div className="card-body">
            <imageHelper item = { item }></imageHelper>
          <p className="lead font-weight-bold text-wrap">
            {itemName}
          </p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ItemCard;