import React from 'react';
import Products from './PRODUCTS/Products';
import Data from '../src/PRODUCTS/Data.json';

const App = () => {
    return (
        <div>
             <h1 className='title'>Shopping List</h1>
            <main>
                {Data.map((item, id) =>   <Products key={id} title={item.title} Description={item.description} Price={item.price} Category={item.category} image={item.image} />)}
              </main>         
        </div>
    );
};

export default App;
