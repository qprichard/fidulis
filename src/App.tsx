import React from 'react';
import {TopLayout} from "./layout/top/top";
import {ContainerLayout} from "./layout/container/container";
import {BrowserRouter as Router} from "react-router-dom";
import {ModalProvider} from "./components/modal/modal";

function App() {
    return (
        <>
            <Router>
                <ModalProvider>
                    <TopLayout></TopLayout>
                    <ContainerLayout></ContainerLayout>
                </ModalProvider>
            </Router>
        </>
    );
}

export default App;
