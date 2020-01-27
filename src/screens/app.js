import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PostsList from '../components/postsList';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';
import Header from '../components/header.js';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {isLogged} from '../utils/auth';

class App extends React.Component {
  render() {
    this.props.getPosts();
    return (
      <View>
        <Header />
        <PostsList />
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => this.props.navigation.navigate('New')}>
          <Icon name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: '10%',
    bottom: '10%',
    backgroundColor: '#26c281',
    width: 60,
    height: 60,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 25,
    color: '#fff',
  },
});

export default connect(
  null,
  {getPosts},
)(App);
