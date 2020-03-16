
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {Provider} from  "react-redux"
import {Reducer} from "./Reducer/Reducer"
import {createStore} from "redux"

let store=createStore(Reducer)

reactDOM.render(<Provider store={store}><App/> </Provider>,document.getElementById("root"))