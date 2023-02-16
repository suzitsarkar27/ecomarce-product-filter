import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const catagories=[
    {"id":0,
    "name":"All",
    },
    {"id":1,
    "name":"Men's Boot",
    },
    {"id":2,
    "name":"Men's Pants",
    },
    {"id":3,
    "name":"Men's Sneaker",
    },
    {"id":4,
    "name":"Bag",
    },
    {"id":5,
    "name":"Cap",
    },
    {"id":6,
    "name":"Earphones",
    },
    {"id":7,
    "name":"Bottle",
    },

  ]
    const prices=[
        {"id":1,
         name: "lessthen200",
        value: "lt100"
        },
        {"id":2,
        name: "From 100 to 600",
        vale: "bwt100600"
        },
        {id:3,
        name: "geterthen 600",
        value: "gt600"
        },
        {"id":4,
        name: "Clear Filter",
        value: "clear"
        },     
    ];

const Filter = ({
    activeCatagory,
    setActivecatagory,
    activePrice,
    setActicePrice,
    setFilter,
    product}) => {

        useEffect(()=>{
            if( activeCatagory === 'All' && activePrice ===  ""){
                setFilter(product);
                return;
            }

            const filterCatagory = product.filter(item=>  activeCatagory === "All" ? item: item.category === activeCatagory);

            const filterPrice = filterCatagory.filter((items=> 
                
                activePrice === "" 
                ? items 
                : activePrice === "lt100"
                ? items.price < 100
                : activePrice === "bwt100600"
                ? items.price >= 100 && items.pirce <= 200 
                : items.pirce >= 400

            ));
            setFilter(filterPrice)

        },[ activeCatagory,activePrice,product,setFilter]);
    
  
       
        


    return (
        <div>
            
            {catagories.map(item=> <div className='d-flex'>
             <input type="checkbox" value={item.name} key={item.id}
                    onClick={()=> setActivecatagory(item.name)} 
                    active={activeCatagory}
                     setActivecatagory={ setActivecatagory}
                    className={`m-2 ${ activeCatagory === item.name && 'bg-success'}`
           }/>
           <h4>{item.name}</h4>
         </div>
            
           )}
      <div>
             {prices.map(item=>(
                <Button key={item.id}
                 onClick={()=> item.value !== "clear"
                 ? setActicePrice(item.value)
                 : setActicePrice ("")}
                 className={`m-2 ${activePrice === item.name && 'bg-danger'}` }>
                {item.name}
                </Button>
                ))}
            </div>      
        </div>
    );
};

export default Filter;