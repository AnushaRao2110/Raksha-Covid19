import { API } from '../../backend';

export const AddToCart = (userId, token, itemId) => {
    return fetch(`${API}/cart/add/${userId}`,
    {
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify({ itemId })
    })
    .then(response => {
        response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}


export const getCart = (userId, token) => {
    return fetch(`${API}/cart/${userId}`,
    {
        method : 'GET',
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => {
        response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}

export const DeleteFromCart = (userId, token, itemId) => {
    return fetch(`${API}/cart/${itemId}/${userId}`,
    {
        method : 'DELETE',
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => {
        response.json();
    })
    .catch(err=>{
        console.log(err);
    })
}