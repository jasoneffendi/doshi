import React from 'react'
import { StackNavigator } from 'react-navigation'

import Welcome from '../components/Welcome'

const Stack = StackNavigator({
    Welcome: {
        screen: Welcome
    }
})

export default () => <Stack/>