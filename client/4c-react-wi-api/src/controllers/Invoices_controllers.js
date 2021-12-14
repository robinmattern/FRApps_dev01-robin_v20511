// import          {  useEffect, useState } from "react-dom";  // fails with: object is not a function or its return value is not iterable in react 16.13.1
// import React,   {  useEffect, useState } from "react";
   import          {  useEffect, useState } from "react";

  var  aAPI_URL    = 'http://localhost:50312/api/invoices'

//  ------------------------------------------------------------------
//var                      GetInvoices = ( ) => {
  export          function GetInvoices( ) {
//export          function getInvoices( ) {
//                function getInvoices( ) {
// export default function GetInvoices( ) {

const [ Invoices, setInvoices ] = useState( [ ] )   // Invoices = setInvoices( data )

 // The separate async function
    const getData  =  async () => {
      var response =  await fetch( aAPI_URL )
      var data     =  await response.json()
          setInvoices( data )
          }
 useEffect( ( ) => {
    getData( )
    }, [ ] )
 
    return ( Invoices ) 
//  return (
//     <div className="container">
//       <ul>
//         { Invoices.map( Invoice => <li key={ Invoice.number }>{ Invoice.name }</li>) }
//       </ul>
//     </div>
//   )
  
   };
//  ------------------------------------------------------------------

   export function GetInvoice( number ) {
// export function getInvoice( number ) {
//        function getInvoice( number ) {

const [ Invoices, setInvoices ] = useState( [ ] )

 // The separate async function
    const getData  =  async () => {
    const response =  await fetch( aAPI_URL )
    const data     =  await response.json()
    setInvoices( data )
    }
 useEffect( ( ) => {
    getData( )
    }, [ ] )
 
    return ( Invoices.find( invoice => invoice.number === number  ) ) 
  
   };

// export function getInvoices() {
//  return invoices;
//  }
// export function getInvoice( number ) {
//  return invoices.find(
//    invoice => invoice.number === number
//    );
//  }

    // pInvoices = { getAll: getInvoices 
    //             , getOne: getInvoice
    //               } 
 
    // export default pInvoices
