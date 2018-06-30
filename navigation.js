import { createStackNavigator } from 'react-navigation'
import MainScreen from './screens/main_screen';
import GaragePropositionScreen from './screens/garage_proposition_screen'


export const AppNavigation = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  GarageProposition: {
    screen: GaragePropositionScreen,
  },
})
