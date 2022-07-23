import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../router";
import Main from "../pages/Main/Main";
import MyGradientBackground from "./UI/MyGradientBackground/MyGradientBackground";

const AppRouter: FC = () => {
    return (
        <MyGradientBackground>
            <Routes>
                {routes.map((route) =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path="*" element={<Main/>}/>
            </Routes>
        </MyGradientBackground>
    );
};

export default AppRouter;