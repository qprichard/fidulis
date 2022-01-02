import React from 'react';
import {TopLayout} from "./layout/top/top";
import {ContainerLayout} from "./layout/container/container";
import {HashRouter} from "react-router-dom";
import {ModalProvider} from "./components/modal/modal";
import {BurgerMenuProvider} from "./components/burger-menu/burger-menu";

function App() {
    return (
        <>
            <HashRouter>
                <ModalProvider>
                    <BurgerMenuProvider>
                        <TopLayout></TopLayout>
                        <ContainerLayout></ContainerLayout>
                    </BurgerMenuProvider>
                </ModalProvider>
            </HashRouter>
        </>
    );
}

export default App;
