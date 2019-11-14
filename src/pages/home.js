import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Button, Text, View } from 'native-base'
import { Header, Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'
import { Item, FeatherHeaderButtons } from '../components/headerButtons'

class HomePage extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Home',
		headerRight: (
			<FeatherHeaderButtons>
				<Item
					title="Info"
					iconName="info-circle"
					onPress={() => {
						alert('Pressed a button')
					}}
				/>
			</FeatherHeaderButtons>
		),
	})

	render() {
		return (
			<Container>
				<StatusBar barStyle="dark-content" />
				<Content>
					<Header />

					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>
								This is a starter React-Native APP
							</Text>

							<Text style={styles.sectionDescription}>
								Bellow are some tests to make sure everything is running as it should :)
							</Text>
						</View>

						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Icons</Text>

							<Text style={styles.sectionDescription}>
								Default Feather Icon:{' '}
								<Icon name="disc" size={30} color="#900" />
							</Text>
						</View>

						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Redux State</Text>

							<Text style={styles.sectionDescription}>
								Global username: {this.props.user.username}
							</Text>
						</View>

						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>NativeBase</Text>

							<Button
								onPress={() => {
									alert('Button pressed')
								}}
								full
								info>
								<Text>Press me</Text>
							</Button>
						</View>

					</View>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
		flex: 1,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
})

const mapStateToProps = state => {
	const { user } = state
	return { user }
}

export default connect(mapStateToProps)(HomePage)
