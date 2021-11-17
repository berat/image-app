import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Header} from 'react-native-elements';

import {Button} from '../../base';
import {Back} from '../../icons';
import usePage from './hooks/usePage';
import {useNavigation} from '@react-navigation/core';

export default function DetailHeader() {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Header
      backgroundColor={theme.colors.black}
      placement="center"
      barStyle="light-content"
      containerStyle={{
        paddingTop: 10,
        paddingBottom: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 0,
      }}
      leftComponent={
        <Button onPress={goBack} py={5}>
          <Back stroke={theme.colors.white} width={24} height={24} />
        </Button>
      }
    />
  );
}
