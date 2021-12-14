import { useParams  } from "react-router-dom";
import { getInvoice } from '../data';         // .(11204.01.1 RAM Added)  

export default function Invoice() {
  let params  = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
    );
  }

//export default Invoice1
//export default Invoice   // import or export may only appear at the top level 

/*
function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
  }
*/
