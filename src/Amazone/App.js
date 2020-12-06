import React, { Component } from 'react';
import data from './data'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="grid-container">
            <header>
            <div className="header row">
                <a className='brand' href="index.html">Amazone</a>
                <a href="signup.html">Sign Up</a>
                <a href="card.html">Card</a>
            </div>
        </header>
        <main>
            <div>
                <div className="row center">
                  
                 {data.products.map((product)=>(
                    <div className="card" key={product._id}>
                       <a href={`/product/${product._id}`}> <img className="medium" src={product.image} alt={product.name}/> </a>
                       <div className="card-body">
                           <a href={`/product/${product._id}`}>
                             <h2> {product.name} </h2>
                           </a>
                           <div className="rating">
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                               <span><i className="fa fa-star"></i></span>
                           </div>
                       </div>
                       <div className="price">
                           ${product.price}
                       </div>
                      </div>
                   
                  
                 ))}
                  </div>
                 </div>
         </main>
            <footer>
            <div className="row center">
                    <p>All rights reserved</p>
            </div>
         </footer>
        </div>
         );
    }
}
 
export default App;