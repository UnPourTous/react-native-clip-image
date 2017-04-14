/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'

import ClipImage from './lib/index'

export default class example extends Component {
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ClipImage
          style={{
            borderRadius: 10
          }}
          width={300}
          height={225}
          source={require('./images/monster.png')}
          duration={600}/>
      </View>
    )
  }
}

AppRegistry.registerComponent('example', () => example)
