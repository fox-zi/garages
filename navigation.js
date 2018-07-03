import { createStackNavigator } from 'react-navigation'
import MainScreen from './screens/main_screen';
import GaragePropositionScreen from './screens/garage_proposition_screen';
import GarageSearchResultsScreen from './screens/garage_search_results_screen';
import GarageDetailScreen from './screens/garage_detail_screen';


export const AppNavigation = createStackNavigator({
  Home: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  GarageDetail: {
    screen: GarageDetailScreen,
  },
  GarageSearchResults: {
    screen: GarageSearchResultsScreen,
    navigationOptions: {
      header: null,
    }
  },
  GarageProposition: {
    screen: GaragePropositionScreen,
    navigationOptions: {
      title: 'New garage'
    },
  },
})
