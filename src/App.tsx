import React from 'react';
import {TopLayout} from "./layout/top/top";
import {ContainerLayout} from "./layout/container/container";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <TopLayout></TopLayout>
                <ContainerLayout></ContainerLayout>
            </Router>
        </>
    );
}

export default App;
