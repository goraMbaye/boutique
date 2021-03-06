import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from'./CartColumns';
import EmpityCart from'./EmpityCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CarTotal from './CarTotal';

export default class  extends Component {
 
    render() {
        return (
            <section>
               
                <ProductConsumer>
                    {value=>{
                        const {cart}=value;
                        if(cart.length > 0){
                           return(
                            <React.Fragment>
                              <Title name="your" title="cart"/>
                              <CartColumns />
                              <CartList value={value}/>
                              <CarTotal value={value}/>
                            </React.Fragment>
                            
                             
                           )
                        }else{
                           return <EmpityCart />
                        }
                    }}
                </ProductConsumer>
                
                
            </section>
        )
    }
}
