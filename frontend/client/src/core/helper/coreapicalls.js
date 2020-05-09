import { API } from '../../backend';

export const getItems = () => {
    return fetch(`${API}/items`,
    {method : 'GET' }
    )
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}