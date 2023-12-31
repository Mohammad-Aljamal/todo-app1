import React from "react";
import Settings from "../src/Context/Settings/settings";
import LoginProvider from "../src/Context/Settings/context";
import Auth from "../src/components/auth/auth"
import Login from "../src/components/auth/login"
import ToDo from "./components/todo/todo.jsx";
import Header from "./components/Header";
import SignUp from "./components/auth/signup";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import './style.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import { MantineProvider } from "@mantine/core";
import Form from "./components/Form";

import "./app.scss";
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    
        <Settings>
        <LoginProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<Form />} />
          </Routes>
        
           <SignUp/>
          </LoginProvider>
          
        </Settings>
        
 
    </MantineProvider>
  );
}
