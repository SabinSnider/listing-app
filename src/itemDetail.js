import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail({match} ) {

    useEffect (() => {
        fetchItem();
        // console.log(match)
    }, []);

    const [item, setItem] = useState({});
    //this.setItem jastai
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);


    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
};

    return (
        <div>
           <p> Items detail</p>
           <div>
          
            <h1>{item.name}</h1>
        </div>
        
         </div>
        
    );
}

export default ItemDetail;