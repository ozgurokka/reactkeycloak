import React from "react";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecuredPage from "./pages/Securedpage";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"
import PrivateRoute from "./helpers/PrivateRoute";



import './App.css';

function App() {
  return (
    <div>
       <Nav />
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
