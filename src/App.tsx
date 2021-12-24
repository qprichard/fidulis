import React from 'react';
import {TopLayout} from "./layout/top/top";
import {ContainerLayout} from "./layout/container/container";
import {HashRouter} from "react-router-dom";
import {ModalProvider} from "./components/modal/modal";

function App() {
    return (
        <>
            <HashRouter>
                <ModalProvider>
                    <TopLayout></TopLayout>
                    <ContainerLayout></ContainerLayout>
                </ModalProvider>
            </HashRouter>
        </>
    );
}

export default App;
