   import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react-dom";
// import { getInvoice  } from '../data';                           // .(11204.01.1 RAM Added)  
// import { pInvoices   } from './Invoices_controllers.js';         // .(11207.03.1 RAM Added)  
// import { GetInvoice  } from './Invoices_controllers.js';         // .(11204.04.1 RAM Added)  
   import { GetInvoice  } from '../controllers/getInvoice.js';      // .(11207.05.1 RAM Added)  

export default function Invoice() {
  let params   =  useParams();
  let number   =  parseInt( params.invoiceId, 10)
//let invoice  =  await getInvoice( number );
//let invoices =  await fetch( 'http://localhost:50312/api/invoices' )

//let invoice  =  pInvoices.getOne( number );
  let invoice  =  GetInvoice( number );
 if (!invoice) {  return null }                                // .(11207.02.1 RAM React runs render multiple times, so sometimes there is no data and you must return null)
//  var [invoices, setInvoices] = useState( [ ] )

//       useEffect( ( ) => {
//         fetch( 'http://localhost:50312/api/invoices' )
//          .then(  response => response.json(  ) )
//          .then(  data     => setInvoices( data ) )
//          .catch( err      => console.log( err  ) )
//           }, [ ] );

//   let invoice  = invoices.find( invoice => invoice.number === number )

  return (                                                    // .(11207.02.3 RAM Render data)
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
    );
  }

// export default Invoice1
// export default Invoice   // import or export may only appear at the top level 

/*
function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
  }
*/

//async function getInvoice( number ) {
//  let invoices = await fetch( 'http://localhost:50312/api/invoices' )
//  return invoices.find(
//    invoice => invoice.number === number
//    );
//  }  