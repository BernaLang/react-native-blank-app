import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import userReducer from './src/reducers/user'

const store = createStore(userReducer)

const RNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux)
