import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Items = ({items, handleClick}) => {
   const {category,img,name,price, }=items;

    return (
      <div className='g-3 col-md-6 col-lg-4 col-xl-3'>
           <Card>
              <Card.Img className='h-50' variant="top" src={img} />
          
                <Card.Body>
                  <Card.Title>{category}</Card.Title>
                  <Card.Title className='fs-6'>{name}</Card.Title>
                  <Card.Title>Price:{price}</Card.Title>
                  <Button onClick={()=> handleClick(items)}>ADD TO CARD</Button>
                  {/* <input onClick={()=> handleClick(items)} type="checkbox" name="" value={"Addtocard"} id="" />Addtocard */}
                </Card.Body>
            </Card>
      </div>
       
  
    );
};

export default Items;