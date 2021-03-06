/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule ButtonExample
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  Alert,
  Button,
  View,
} = ReactNative;

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = 'Button';
exports.description = 'Simple React Native button component.';

exports.examples = [
  {
    title: 'Button: Simple Button',
    titleNotHightlightable: true,
    description: 'The title and onPress handler are required. It is ' +
      'recommended to set accessibilityLabel to help make your app usable by ' +
      'everyone.',
    render: function() {
      return (
        <Button 
          
          onPress={onButtonPress}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
      );
    },
  },
  {
    title: 'Button: Adjusted color',
    titleNotHightlightable: true,
    description: 'The color adjusts the background color of the button.',
    render: function() {
      return (
        <Button
          onPress={onButtonPress}
          title="Press Purple"
          color="#841584"
          accessibilityLabel="Learn more about purple"
        />
      );
    },
  },
  {
    title: 'Button: Fit to text layout',
    titleNotHightlightable: true,
    description: 'This layout strategy lets the title define the width of ' +
      'the button',
    render: function() {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Ok!"
            color="#841584"
            accessibilityLabel="Ok, Great!"
          />
        </View>
      );
    },
  },
  {
    title: 'Button: Disabled Button',
    titleNotHightlightable: true,
    description: 'All interactions for the component are disabled.',
    render: function() {
      return (
        <Button
          disabled
          onPress={onButtonPress}
          title="I Am Disabled"
          accessibilityLabel="See an informative alert"
        />
      );
    },
  },
];
