import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Book from './pages/Book';
import Login from './pages/Login';
import List from './pages/List';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
);

export default Routes;