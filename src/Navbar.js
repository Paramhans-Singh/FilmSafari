import React from "react";
import styles from './nav.module.css'
import cart from "./assets/shopping-cart.png"

function Navbar(props) {
  
    const {cartCount} =  props;
       
      return (
      <>
      <div className={styles.nav}>
        
      <div className={styles.title}>Film-Safari</div>
        
        <div className={styles.cartIconContainer}>
            <img className={styles.cartIcon} 
                 alt="Cart-Icon" 
                 src = {cart}
                 />
            <span className ={styles.cartCount}>{cartCount}</span>
        </div>
      </div>

      </>
      )
    }
  
 
  
  export default Navbar;
  
