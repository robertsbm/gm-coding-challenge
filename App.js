import { createStackNavigator, createAppContainer } from 'react-navigation';
import FetchCommits from './src/screens/FetchCommits';

const navigator = createStackNavigator(
    {
        Home: FetchCommits,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'GM Coding Challenge'
        }
    }
);

export default createAppContainer(navigator);
