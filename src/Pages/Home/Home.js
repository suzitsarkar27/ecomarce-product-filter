import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Header from '../Header';
import Bannar from './Bannar';
import Card from './Card';


const Home = () => {
    // const [show,setShow]=useState([true]);

    const [cart,setCart]=useState([]);

    const  handleClick=(item)=>{
        if(cart.indexOf(item) !== -1)return;
        setCart([...cart,item])
    }
   
    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;
    
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
      };
   
    return (
        <div>
            <Header size={cart}/>
            <Card cart={cart}
              handleChange={handleChange}
              setCart={setCart} />
             <Bannar  handleClick={ handleClick} />       
        </div>
    );
};

export default Home; 