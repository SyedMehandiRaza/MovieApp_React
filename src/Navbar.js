import React, { Component } from "react";


class Navbar extends Component{
 render(){
  return(
   <>
     <div style={styles.nav}>
        <div style={styles.title}>
           Movie App
        </div>
        <div style={styles.cartContainer}>
           <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}/>
           <span style={styles.cartCount}>3</span>
        </div>
     </div>
   
   </>
  )
 }
}

export default Navbar;

const styles = {
   nav: {
      width: "100%",
      height: 60,
      backgroundColor: "red",
      display: "flex",
      justifyContent: "space-between"
   },
   title: {
      paddingTop:9,
      fontSize:40 ,
      fontWeight:600,
      fontFamily:'"Montserrat" , sans-serif',
      textTransform: "uppercase",
      marginLeft:20,
   },
   cartContainer: {
      position:"relative",
      cursor:"pointer"
   },
   cartIcon: {
       height:48,
       marginLeft:20,
       paddingTop:8,
       paddingRight:17
   },
   cartCount: {
       background: "orange",
       borderRadius: "50%",
       padding: "4px 8px",
       position: "absolute",
       right: 10,
       top: 3,
       fontSize:12
   }
}