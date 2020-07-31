import React from "react"
import { Provider } from "react-redux"

import makeStore from "./store"

const store = makeStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
