import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../Layouts/Default.Layout"


//<Asdf comp={Component}/>
const DefaultHOC = ({component: Component, ...rest}) => {
    
    return (
        <>
            <Routes>
                <Route {...rest} element={
                    <DefaultLayout>
                        <Component />
                    </DefaultLayout>
                }/>
            </Routes>
            
        
        </>
    );
};


export default DefaultHOC;