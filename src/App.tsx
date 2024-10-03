import React, {FC, useState} from 'react';
import './app.scss'
import {BrowserRouter, Link} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/Footer/Footer";

import MediaQuery from "react-responsive";
import {slide as Menu} from 'react-burger-menu'

const App: FC = () => {

    const [menu, setMenu] = useState<boolean>(false)

    const closeHandler = ():void => {
        setMenu(false)
    }

    const handleIsOpen = ():void => {
        setMenu(!menu)
    }

    return (
        <div className='main'>
            <BrowserRouter>
                <MediaQuery minWidth={1200}>
                    <Navbar/>
                    <AppRouter/>
                    <Footer/>
                </MediaQuery>
                <MediaQuery maxWidth={1199}>
                    <Menu className="myBurgerMenu" pageWrapId={ "page-wrap" } right width={'100%'} height={'50px'} isOpen={menu} onOpen={handleIsOpen} onClose={handleIsOpen}>
                        <Link onClick={closeHandler} to="">ГЛАВНАЯ</Link>
                        <Link onClick={closeHandler} to="/projects">ПРОЕКТЫ</Link>
                        <a onClick={closeHandler} href="https://github.com/kirill55580666" target="_blank" rel="noreferrer">GitHub</a>
                        <a onClick={closeHandler} href="https://spb.hh.ru/resume/9a0fc1d0ff057764510039ed1f58494b59565a" target="_blank" rel="noreferrer">HeadHunter</a>
                    </Menu>
                        <AppRouter/>
                        <Footer/>
                </MediaQuery>
            </BrowserRouter>
        </div>
    );
};

export default App;