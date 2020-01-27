import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../utils/globalStyles';
import {signup} from '../utils/auth';
import Notification from '../components/notification';

class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      showAlreadyUser: false,
      showError: false,
      showEmptyPassword: false,
    };
  }

  onPasswordChange = password => {
    this.setState({password});
  };

  onNameChange = name => {
    this.setState({name});
  };

  submit = () => {
    if (this.state.password.length >= 3 && this.state.name.length > 0) {
      this.state.showEmptyPassword = false;
      this.setState(this.state);
      signup(
        this.props.navigation.state.params.mail,
        this.state.password,
        this.state.name,
        () => {
          this.props.navigation.navigate('stackLogged');
        },
        error => {
			console.log(error);
          this.state.showError = true;
          this.setState(this.state);
        },
      );
    } else {
      this.state.showEmptyPassword = true;
      this.setState(this.state);
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Notification
          notificationContent="This username is already used !"
          show={this.state.showAlreadyUser}
        />
        <Notification
          notificationContent="An error has occured"
          show={this.state.showError}
        />
        <Notification
          notificationContent="Please choose a password longer than 3 characters, and a non-empty username."
          show={this.state.showEmptyPassword}
          style={{zIndex: -100}}
        />
        <Text style={styles.title}>Welcome on board !</Text>
        <Text>
          Please just fill those two field and we let you in.
          {'\n'}Your mail is{' '}
          <Text style={{fontWeight: '700'}}>
            {this.props.navigation.state.params.mail}
          </Text>
          .
        </Text>
        <View style={{marginTop: 50}} />
        <TextInput
          style={globalStyles.textInput}
          placeholder="Your display name"
          autoCapitalize="none"
          value={this.state.name}
          onChangeText={this.onNameChange}
        />
        <TextInput
          style={globalStyles.textInput}
          placeholder="Your password"
          value={this.state.password}
          onChangeText={this.onPasswordChange}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.submit} style={globalStyles.button}>
          <Text style={{color: '#fff'}}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
  },
});

export default LoginSignup;
