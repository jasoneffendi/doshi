import React from 'react'
import { StackNavigator } from 'react-navigation'

import Welcome from '../components/Welcome'
import Main from '../components/Main'

const Stack = StackNavigator({
    Welcome: {
        screen: Welcome
    },
    Main: {
        screen: Main
    }
})

export default () => <Stack/>