import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import Items from './Items';
import Loading from './Loading';
const Bannar = ({ handleClick}) => {


    const [product,setProducts]=useState([]);
    const [filter,setFilter]=useState([]);
    const [activeCatagory,setActivecatagory]=useState('All');
    const [activePrice,setActicePrice]=useState("");
    const [serch,setSerch]=useState("");


    // Fech API DATA
    useEffect(()=>{
        const fechProducts= async()=>{
            try{
              const data= await fetch(`Product.json`) 
               const product= await data.json();
                setProducts(product);
                setFilter(product)
            }catch (error){}
        }
        fechProducts();
    },[]);
    return (
        <div>
                <div className='text-center'>
                 <input className='serch-input' type="text" placeholder='serch...'
                 onChange={(event)=>{
                 setSerch(event.target.value);
               }} />
         </div>
          <Loading></Loading>
          <Filter 
          product={product}
          setFilter={setFilter}
          activeCatagory={activeCatagory} 
          setActivecatagory={setActivecatagory} 
          activePrice={activePrice}
          setActicePrice={setActicePrice}
          />
             <div className="row">
                     {

                       filter.filter(val=>{
                        if(serch == ""){
                            return val;
                        }
                        else if(val.title.toLowerCase().includes(serch.toLowerCase())){
                          return val;
                        }
                       }).map(items=><Items 
                        items={items} 
                        key={items.id}
                        handleClick={handleClick}
                        ></Items>)
                      }
             </div> 
        </div>
    );
};

export default Bannar;