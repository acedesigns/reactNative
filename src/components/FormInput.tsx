/* =======================================================
 *
 * Created by anele on 2022/02/09.
 *
 * @anele_ace
 *
 * =======================================================
 */

/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, StyleSheet, Text, TextInput, TextInputProps} from 'react-native';

export interface FormInputProps {
  placeholder: string;
  label: string;
  error: string;
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<TextInput> &
    Readonly<TextInputProps> &
    Readonly<{children?: React.ReactNode}>;
}

const FormInput = ({placeholder, label, props, error}: FormInputProps) => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={{fontWeight: 'bold'}}>{label}</Text>
        {error ? (
          <Text style={{color: 'red', fontSize: 16}}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default FormInput;
