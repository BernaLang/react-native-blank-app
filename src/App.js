import React from 'react'
import { Root } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { fromRight } from 'react-navigation-transitions'

import HomePage from './pages/home'

const HomeStack = createStackNavigator(
	{
		Home: HomePage,
	},
	{
		headerLayoutPreset: 'center',
		transitionConfig: () => fromRight(),
	},
)

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				switch (routeName) {
					case 'Home':
						iconName = 'home'
						break

					default:
						iconName = 'question-circle'
						break
				}

				<Icon name={iconName} size={25} color={tintColor} />
			},
		}),
		tabBarOptions: {
			// activeTintColor: '#FFF',
			// inactiveTintColor: '#AAA',
			style: {
				// backgroundColor: '#333',
				// paddingVertical: 5,
				// height: 55,
			},
			tabStyle: {
				// paddingVertical: 15,
			},
		},
		lazy: true,
	},
)

const AppContainer = createAppContainer(TabNavigator)

export default class APP extends React.Component {
	render() {
		return (
			<Root>
				<AppContainer />
			</Root>
		)
	}
}
