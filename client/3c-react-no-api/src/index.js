import { render } from "react-dom";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App      from "./App.js";
import Orders   from "./routes/orders";
import Invoices from "./routes/invoices";
import Invoice  from './routes/invoice';  // .(11204.01.2 RAM Added) 

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
    
{/*     <Route path="/"        element={<App      />} />
        <Route path="orders"   element={<Orders   />} />
        <Route path="invoices" element={<Invoices />} />
*/}       
      <Route   path="/"        element={<App      />}  >
      
        <Route path="orders"   element={<Orders   />} />
        
        <Route path="invoices"     element={<Invoices />}  >
          <Route path=":invoiceId" element={<Invoice  />} />
        </Route>
        
        <Route path="*"	       element={
		      <main style={{ padding: "1rem" }}>
		        <p>There's nothing here!</p>
		      </main> }
        />
        
      </Route>
      
    </Routes>
  </BrowserRouter>,
  rootElement
);

