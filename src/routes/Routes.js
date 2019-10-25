/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import App from '../pages/App'
import Details from '../pages/Details'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


const Routes = createStackNavigator({
    AppPage: {
        screen: App, 
        navigationOptions: {
            header: null,
        }
    },
    DetailsPage: {
        screen: Details, 
        navigationOptions: {
            title: 'Repository Details'
        }
    }
})

export default createAppContainer(Routes)