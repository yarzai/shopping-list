import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Component
const Header = (props) => {
  return (
    <View style={styles.conntiner}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

// Default props
Header.defaultProps = {
  title: 'Shopping List',
};

// Styling
const styles = StyleSheet.create({
  conntiner: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});
export default Header;
