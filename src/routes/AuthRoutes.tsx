
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useStores } from "context/StoreContext";

import { observer } from "mobx-react";
import { useEffect, useState } from "react";


import User from "context/models/User";
import LoginPage from "pages/Login";
import Dashboard from "pages/Dashboard";


const AuthRoutes = observer(() => {

    const {authStore} = useStores();
    const[user, setUser]=useState<User>();

 

      

    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/> 
            <Route path="/" element={<Dashboard/>}/> 
           
        </Routes>
    );
});
export default AuthRoutes;