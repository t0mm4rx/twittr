import React from 'react';
import {View, FlatList, StyleSheet, RefreshControl} from 'react-native';
import Post from './post';
import {connect} from 'react-redux';
import {getPosts} from '../actions/posts';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={this.props.posts}
          style={styles.list}
          contentContainerStyle={{paddingBottom: 80}}
          renderItem={item => <Post item={item.item} />}
          refreshControl={
            <RefreshControl
              onRefresh={() => this.props.getPosts()}
              refreshing={this.state.refreshing}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 140,
  },
  list: {
    paddingBottom: 200,
    paddingTop: 10,
  },
});

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
  };
}

export default connect(
  mapStateToProps,
  {getPosts},
)(PostsList);
