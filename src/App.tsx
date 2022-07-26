import React, {FC} from 'react';
import './app.scss'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/Footer/Footer";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;