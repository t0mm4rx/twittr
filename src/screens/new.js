import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../utils/globalStyles';
import {addPost, getPosts} from '../actions/posts';
import {getDisplayName, getUid} from '../utils/auth';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  onMessageChange = val => {
    this.setState({...this.state, message: val});
  };

  validate = () => {
    if (this.state.message.length > 0) {
      this.props.addPost(this.state.message, getDisplayName(), getUid());
      this.props.getPosts();
      this.setState({name: '', message: ''});
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>What's up ?</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Your message"
            multiline={true}
            value={this.state.maessage}
            onChangeText={this.onMessageChange}
          />
          <TouchableOpacity onPress={this.validate} style={globalStyles.button}>
            <Text style={{color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => this.props.navigation.goBack()}>
          <Icon style={styles.closeIcon} name="times" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginBottom: 25,
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
  closeIcon: {
    fontSize: 40,
  },
  formWrapper: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: 50,
  },
});

const mapDispatchToState = dispatch => {
  return {
    addPost: (message, author, userId) => {
      dispatch(addPost(message, author, userId));
    },
    getPosts: dispatch => getPosts(dispatch),
  };
};

export default connect(
  null,
  mapDispatchToState,
)(New);
