import React, {Component} from 'react';
import {View, Text,} from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    )
  }
}

const styles = {
  container:{
    backgroundColor: '#fafafc',
    paddingTop:24,
    alignItems:'center',
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
  },
  text:{
    fontSize:18 ,
    fontWeight:'bold',
    textAlign:'center',
    margin:13
  }
}
