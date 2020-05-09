import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import ItemCard from './ItemCard';
import { getItems } from './helper/coreapicalls';

const Item = () => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    const loadAllItems = () => {
        getItems()
        .then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setItems(data);
            }
        })
    }

    useEffect(() => {
        loadAllItems()
    }, [])

    return (
        <Base>
            <div className="row text-center">
                <div className="row">
                    {items.map((item, index) => {
                        return (
                            <div key={index} className="col-md-4 mb-4">
                                <ItemCard item={item}></ItemCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    );
}

export default Item;