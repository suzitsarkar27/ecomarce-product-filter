import React, { useEffect, useState }  from 'react';
import { Button} from 'react-bootstrap';
import  './card.css'
const Card = ({cart,handleChange,setCart}) => {
    
   const [price,setPrice]=useState(0);
  
   const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

   const handlePrice = () => {
    let total = 0;
   
    cart.map((item) => (total += item.amount * item.price) );
    setPrice(total);
   
  };
 

  useEffect(() => {
    handlePrice();
  });

    return (
        <div>
            {cart.map(item=>
            
               ( <div key={item.id}>
                        <div className='d-flex'>
                        <Button onClick={()=>handleChange(item,1)} className='me-2'>+</Button>
                        <Button>{item.amount}</Button>
                        <Button onClick={()=>  handleChange(item,-1)} className='ms-2'>-</Button>
                        <Button onClick={()=> handleRemove( (item.id))} className='ms-2'>Remove</Button>
                        
                        <h3>Price:{item.price}</h3>
                        </div>
                        <h4>stock:{item.stock}</h4>
                        <img className='w-25 h-26' src={item.img} alt={item.img} />
                        <h2>Delebary Charge:{item.shipping}</h2>
                        <h2>Tax:{item.tax}</h2>
                        
                </div>)
                
          )}
           
          <h2>Grand Total:${price}</h2>
        
 </div>
    
    );
};

export default Card;