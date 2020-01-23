import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {formatTimestamp} from '../utils/date';

class Post extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.author}>@{this.props.item.author}</Text>
        <Text style={styles.text}>{this.props.item.content}</Text>
        <View style={styles.actionsWrapper}>
          <Text style={styles.date}>
            {formatTimestamp(this.props.item.timestamp)}
          </Text>
          <View style={styles.empty} />
          <Icon style={styles.action} name="heart" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    borderColor: '#888',
    borderWidth: 0.1,
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
  },
  author: {
    color: '#666',
  },
  actionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  action: {
    fontSize: 25,
    margin: 10,
  },
  empty: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: '#ccc',
  },
});

export default connect()(Post);
