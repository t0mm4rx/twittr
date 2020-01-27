import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Notification from '../components/notification';
import globalStyles from '../utils/globalStyles';
import {signin} from '../utils/auth';

class LoginLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: '', showError: false};
  }

  onPasswordChange = password => {
    this.setState({password});
  };

  submit = () => {
    if (this.state.password.length > 3) {
      signin(
        this.props.navigation.state.params.mail,
        this.state.password,
        () => {
          console.log('Logged !');
          this.props.navigation.navigate('stackLogged');
        },
        () => {
          this.state.showError = true;
          this.setState(this.state);
        },
      );
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Notification
          notificationContent="Wrong password !"
          show={this.state.showError}
        />
        <Text style={styles.title}>Welcome back</Text>
        <View style={{marginTop: 40}} />
        <TextInput
          style={globalStyles.textInput}
          placeholder="Your password"
          value={this.state.password}
          onChangeText={this.onPasswordChange}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.submit} style={globalStyles.button}>
          <Text style={{color: '#fff'}}>Log in</Text>
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
  },
});

export default LoginLogin;
