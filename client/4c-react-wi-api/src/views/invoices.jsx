// import { useEffect, useState } from "react-dom";
   import { Link, Outlet } from "react-router-dom";
// import { getInvoices  } from "../data";
// import   GetInvoices    from "./GetInvoices";
// import   pInvoices      from './Invoices_controllers.js';         // .(11207.01.2 RAM Added)  
// import { GetInvoices  } from './Invoices_controllers.js';         // .(11204.01.1 RAM Added)  
   import { GetInvoices  } from '../controllers/getInvoices.js';         // .(11204.01.1 RAM Added)  

export default function Invoices() {

//let invoices = pInvoices.getAll();
  let invoices = GetInvoices();
//let invoices = await fetch( 'http://localhost:50312/api/invoices' )
 
//  var  aAPI_URL  = 'http://localhost:50312/api/invoices'

// var [ invoices, setInvoices ] = useState( [ ] )

//       useEffect( ( ) => {
//         fetch(   aAPI_URL )
//          .then(  response => response.json(  ) )
//          .then(  data     => setInvoices( data ) )
//          .catch( err      => console.log( err  ) )
//           }, [ aAPI_URL ] );
 
//  var  getInvoices  = async ( ) = > {
//       var response = await fetch( API_URL )
//       var userdata = await response.json( )
//           setInvoices(userdata)
//           }

//       useEffect( ( ) => {
//           getInvoices()
//           }, [ ] )
 
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {invoices.map(invoice => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
            >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

//async function getInvoices() {
//  return invoices;
//    return await fetch( 'http://localhost:50312/api/invoices' )
//  }