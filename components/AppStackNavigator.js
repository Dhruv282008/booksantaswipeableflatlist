import React from 'react';
import BookDonateScreen from '../screens/BookDonateScreen';
import { createStackNavigator } from 'react-navigation-stack';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen';
import CustomSideBarMenu from './CustomSideBarMenu';

export const AppStackNavigator = createStackNavigator({
    BookDonateList: {
        screen: BookDonateScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    
    RecieverDetails: {
        screen: RecieverDetailsScreen,
        navigationOptions: {
            headerShown: false
        }
    }
},
    {
        contentComponent: CustomSideBarMenu
    }, {
    initialRouteName: 'BookDonateList'
}
);