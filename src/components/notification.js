import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import colors from '../utils/colors';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {top: new Animated.Value(-200)};
  }

  componentDidUpdate() {
    if (this.props.show) {
      this.show();
      setTimeout(() => {
        this.hide();
      }, 6000);
    } else {
      this.hide();
    }
  }

  show = () => {
    Animated.timing(this.state.top, {toValue: 0, duration: 1000}).start();
  };

  hide = () => {
    Animated.timing(this.state.top, {toValue: -200, duration: 1000}).start();
  };

  render() {
    return (
      <Animated.View style={{...styles.wrapper, top: this.state.top}}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{this.props.notificationContent}</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    flexDirection: 'column',
    padding: 20,
    width: '100%',
    zIndex: 100,
  },
  textWrapper: {
    backgroundColor: colors.red,
    padding: 20,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    color: '#fff',
    flex: 1,
  },
});
