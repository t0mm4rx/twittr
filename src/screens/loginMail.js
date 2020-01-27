import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import globalStyles from '../utils/globalStyles';
import {checkMail, signup} from '../utils/auth';
import Notification from '../components/notification';

class LoginMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mail: '', showMailError: false};
  }

  onEmailChange = mail => {
    this.setState({mail});
  };

  submit = () => {
    checkMail(
      this.state.mail,
      alreadySigned => {
        if (!alreadySigned) {
          this.props.navigation.navigate('Signup', {
            mail: this.state.mail,
          });
        }
      },
      exception => {
        console.log(exception);
        this.state.showMailError = true;
        this.setState(this.state);
      },
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Notification
          notificationContent="Mail badly formatted"
          show={this.state.showMailError}
        />
        <View style={styles.formWrapper}>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Enter your mail"
            value={this.state.mail}
            onChangeText={this.onEmailChange}
            keyboardType="email-address"
          />
          <TouchableOpacity style={globalStyles.button} onPress={this.submit}>
            <Text style={{color: '#fff'}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  formWrapper: {
    padding: 40,
    justifyContent: 'center',
  },
});

export default LoginMail;
