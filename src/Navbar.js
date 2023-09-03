import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
   width:100%;
   height:60;
   background: linear-gradient(170deg, #0d47a1,#1bc059 );
   display:flex;
   justify-content: space-between
`
const Title = styled.div`
   padding-top:9px;
   font-size:40px ;
   font-weight:600;
   font-family:Montserrat , sans-serif;
   text-transform: uppercase;
   margin-left:20px
`

const CartContainer = styled.div`
   position:relative;
   cursor:pointer
`

const CartIconImg = styled.img`
   height:48px;
   margin-left:20px;
   padding-top:8px;
   padding-right:17px
`

const CartCount = styled.span`
   background: orange;
   border-radius: 50%;
   padding: 4px 8px;
   position: absolute;
   right: 10px;
   top: 3px;
   font-size:12px
`

class Navbar extends Component{
 render(){
  return(
   <>
     <Nav>

        <Title>
           Movie App
        </Title>

        <CartContainer>
           <CartIconImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
           <CartCount>3</CartCount>
        </CartContainer>

     </Nav>
   
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