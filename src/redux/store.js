import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import createRootReducer from "./reducers"
import rootSaga from "./sagas"

const initState = {
  cart: [],
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  let composeEnhancers = compose

  // if (process.env.NODE_ENV === 'development') {
  if (
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
  // }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers").default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
