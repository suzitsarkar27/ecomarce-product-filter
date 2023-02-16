import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({size}) => {

    
   
          
    return (
        <div className='d-flex align-items-center justify-content-evenly'>
             <h2 id='cursor'>My shop</h2>
              <span  className="position-relative">
                <FaShoppingCart id='cursor'className='fs-1 text-info'/>
                <span id='cursor' className="position-absolute 
                 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {size.length}
                    <span className="visually-hidden">unread messages</span>
                </span>
             </span>
         </div>
    );
};

export default Header;