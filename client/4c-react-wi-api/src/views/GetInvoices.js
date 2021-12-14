// import        { useEffect, useState } from "react-dom";  // fails with: object is not a function or its return value is not iterable in react 16.13.1
   import React, { useEffect, useState } from "react";

  var                      GetInvoices = ( ) => {
// export default function GetInvoices( ) {

const [ Invoices, setInvoices ] = useState( [ ] )

  var  aAPI_URL    = 'http://localhost:50312/api/invoices'

 // The separate async function
    const getData  =  async () => {
    const response =  await fetch( aAPI_URL )
    const data     =  await response.json()
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

 export default GetInvoices;
