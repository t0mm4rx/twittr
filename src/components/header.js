import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Twittr</Text>
        <View style={styles.empty} />
        <Icon style={styles.action} name="cog" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 30,
  },
  empty: {
    flex: 1,
  },
  action: {
    fontSize: 25,
  },
});
