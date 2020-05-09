import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import ItemCard from './ItemCard';
import { getCart, addToCart } from './helper/cartHelper';
import { isAuthenticated } from '../auth/helper/index';

const Cart = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(false);

    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    const getCartItems = () => {
        getCart(userId, token)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setItems(data);
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(() => {
        getCartItems()
    }, [reload])

    const loadCart = () => {
        return (
            <div>
                {items.map((item, index) => (
                    <ItemCard key={index}
                        item={item}
                        addToCart={false}
                        removeFromCart={true}
                        setReload={setReload}
                        reload={reload}
                        >
                    </ItemCard>
                ))}
            </div>
        );
    }

    const loadCheckout = () => {
        return (
            <div>
              <h2>This section for checkout</h2>
            </div>
          );
    }

    return (
        <Base>
          <div className="row text-center">
            <div className="col-6">{loadCart()}</div>
            <div className="col-6">Checkout section</div>
          </div>
        </Base>
      );
}

export default Cart;