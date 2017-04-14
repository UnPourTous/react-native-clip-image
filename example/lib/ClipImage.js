/**
 * Created by vengeanliu on 2017/3/22.
 */

'use strict'

import { Animated, Easing, View } from 'react-native'
import React, { Component } from 'react'

import Svg, {
  ClipPath,
  Polygon,
  Image
} from 'react-native-svg'

class ClipSvg extends Component {
  render () {
    const {width, height, style, source} = this.props;
    return (
      <View style={[style, {overflow: 'hidden', width: width, height: height}]}>
        <Svg
          height={height}
          width={width}
        >
          <ClipPath id='clip'>
            <Polygon
              points={'0,0 ' +
              this.props.firstPointX +
              ',' +
              this.props.firstPointY + ' ' +
              this.props.secondPointX + ',' + this.props.secondPointY + ' ' + this.props.thirdPointX + ',' + this.props.thirdPointY + ' ' + this.props.fourthPointX + ',' + this.props.fourthPointY}
              fill='none'
              strokeWidth='0'
            />
          </ClipPath>
          <Image
            height={height}
            width={width}
            href={source}
            clipPath='url(#clip)'
          />
        </Svg>
      </View>
    )
  }
}
export default class ClipImage extends Component {
  static propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    source: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.object]).isRequired
  }
  constructor (props) {
    super(props)

    const {width, height, source} = this.props;
    this.currentSource = source;

    this.state = {
      firstPointY: new Animated.Value(height),
      secondPointX: new Animated.Value(width),
      secondPointY: new Animated.Value(height),
      thirdPointX: new Animated.Value(width),
      thirdPointY: new Animated.Value(height),
      fourthPointX: new Animated.Value(width)
    }
    this.AnimatedClipSvg = Animated.createAnimatedComponent(ClipSvg)
  }

  _animation () {
    let {width, height, duration} = this.props;
    duration = duration ? duration : 300;
    this.state.firstPointY.setValue(0)
    this.state.secondPointX.setValue(0)
    this.state.secondPointY.setValue(0)
    this.state.thirdPointX.setValue(0)
    this.state.thirdPointY.setValue(0)
    this.state.fourthPointX.setValue(0)
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.firstPointY,
          {
            toValue: height,
            duration: duration,
            easing: Easing.in
          }
        ),
        Animated.timing(
          this.state.secondPointY,
          {
            toValue: height,
            duration: duration,
            easing: Easing.in
          }
        ),
        Animated.timing(
          this.state.thirdPointX,
          {
            toValue: width,
            duration: duration,
            easing: Easing.in
          }
        ),
        Animated.timing(
          this.state.fourthPointX,
          {
            toValue: width,
            duration: duration,
            easing: Easing.in
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.secondPointX,
          {
            toValue: width,
            duration: duration,
            easing: Easing.in
          }
        ),
        Animated.timing(
          this.state.thirdPointY,
          {
            toValue: height,
            duration: duration,
            easing: Easing.in
          }
        )
      ])
    ]).start()
  }

  _isNewSource () {
    let {source} = this.props

    if (source) {
      if (typeof source === 'object') {
        return source.uri === this.currentSource.uri
      } else {
        return source === this.currentSource
      }
    } else {
      return false
    }
  }

  componentDidMount () {
    if (this._isNewSource()) {
      this._animation()
    }
  }

  render () {
    const {...props} = this.props
    const AnimatedClipSvg = this.AnimatedClipSvg
    return (
      <AnimatedClipSvg
        {...props}
        firstPointX='0'
        firstPointY={this.state.firstPointY}
        secondPointX={this.state.secondPointX}
        secondPointY={this.state.secondPointY}
        thirdPointX={this.state.thirdPointX}
        thirdPointY={this.state.thirdPointY}
        fourthPointX={this.state.fourthPointX}
        fourthPointY='0'
      />
    )
  }
}
