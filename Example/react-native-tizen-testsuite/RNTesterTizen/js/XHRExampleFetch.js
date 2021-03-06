/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule XHRExampleFetch
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} = ReactNative;


class XHRExampleFetch extends React.Component {
  state: any;
  responseURL: ?string;
  responseHeaders: ?Object;

  constructor(props: any) {
    super(props);
    this.state = {
     responseText: null,
    };
    this.responseURL = null;
    this.responseHeaders = null;
  }

  submit(uri: String) {
    fetch(uri).then((response) => {
      this.responseURL = response.url;
      this.responseHeaders = response.headers;
      return response.text();
    }).then((body) => {
      this.setState({responseText: body});
    });
  }

  _renderHeaders() {
    if (!this.responseHeaders) {
      return null;
    }

    var responseHeaders = [];
    var keys = Object.keys(this.responseHeaders.map);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = this.responseHeaders.get(key);
      responseHeaders.push(<Text style={{color:'black'}}>{key}: {value}</Text>);
    }
    return responseHeaders;
  }

  render() {

    var responseURL = this.responseURL ? (
      <View style={{marginTop: 10}}>
        <Text style={styles.label}>Server response URL:</Text>
        <Text style={{color:'black'}}>{this.responseURL}</Text>
      </View>
    ) : null;

    var responseHeaders = this.responseHeaders ? (
      <View style={{marginTop: 10}}>
        <Text style={styles.label}>Server response headers:</Text>
        {this._renderHeaders()}
      </View>
    ) : null;

    var response = this.state.responseText ? (
      <View style={{marginTop: 10}}>
        <Text style={styles.label}>Server response:</Text>
        <Text style={{width: 1300, height: 300, color: 'black'}}
          //editable={false}
          //multiline={true}
          //defaultValue={this.state.responseText}
          //style={styles.textOutput}
          >{this.state.responseText}</Text>
      </View>
    ) : null;

    return (
      <View>
        <Text style={styles.label}>URL to submit:</Text>
        <Text style={{color:'black'}}>http://www.posttestserver.com/post.php</Text>
        <TouchableOpacity onPress={(event) => this.submit('http://www.posttestserver.com/post.php')}>
          <Text style={{color:'black'}}>Submit</Text>
        </TouchableOpacity>
        {false && <TextInput
          editable={false} 
          returnKeyType="go"
          defaultValue="http://www.posttestserver.com/post.php"
          onSubmitEditing={(event)=> {
            this.submit(event.nativeEvent.text);
          }}
          style={styles.textInput}
        />}
        {responseURL}
        {responseHeaders}
        {response}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 1,
    height: Platform.OS === 'android' ? 44 : 30,
    paddingLeft: 8,
  },
  label: {
    flex: 1,
    color: '#aaa',
    fontWeight: '500',
    height: 20,
  },
  textOutput: {
    flex: 1,
    fontSize: 17,
    borderRadius: 3,
    color: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    height: 200,
    paddingLeft: 8,
  },
});

module.exports = XHRExampleFetch;
