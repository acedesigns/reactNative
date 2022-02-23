/* =======================================================
 *
 * Created by anele on 2022/02/18.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {
  Animated,
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
  TextInput,
  TextInputProps,
} from 'react-native';
import {Text} from 'react-native-paper';

export interface ButtoonProps {
  placeholder: string;
  label: string;
  chilren: any;
  error: string;
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TextInput> &
    Readonly<TextInputProps> &
    Readonly<{children?: React.ReactNode}>;
}

const AppButton = () => {
  return (
    <>
      <Text> Hello I will be a Button </Text>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: 'solid',
  },
  compact: {
    minWidth: 'auto',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 12,
    marginRight: -4,
  },
  iconReverse: {
    marginRight: 12,
    marginLeft: -4,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
    marginHorizontal: 16,
  },
  compactLabel: {
    marginHorizontal: 8,
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
});

export default AppButton;
