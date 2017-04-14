# react-native-clip-image

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  
  
## Introduction 
This component depends on [react-native-svg](https://github.com/react-native-community/react-native-svg). With this component you can clip a image both on android and ios. Since there is an issue about [animation](https://github.com/react-native-community/react-native-svg/issues/251) on higher version, we recommand using react-native-svg@4.5.0

![demo](https://github.com/UnPourTous/react-native-clip-image/blob/master/screenshots/clip-image-demo.gif?raw=true)

## Installation 
1. Install react-native-svg from `npm`

    ```bash
    npm install react-native-svg@4.5.0 --save
    ```
    
2. Link native code

    ```bash
    react-native link react-native-svg
    ```
    
3. Install react-native-clip-image from `npm`

    ```bash
    npm install @unpourtous/react-native-clip-image --save
    ```

## Usage
First, add PopupStub as sibling node of you Root Node
``` js
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
```
## Thanks
* [React Native Svg](https://github.com/react-native-community/react-native-svg)
