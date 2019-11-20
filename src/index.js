import React from "react"
import ReactDom from "react-dom"
import Router from "./router/Routers"
import {Provider} from "mobx-react"
import store from "./store/index"
ReactDom.render(
    <Provider {...store}>
        <Router/>
    </Provider>,
    document.getElementById('root')
)