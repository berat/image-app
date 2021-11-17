import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {Header} from 'react-native-elements';

import {Text, Button, Input, Box} from '../../base';
import {Search} from '../../icons';
import usePage from './hooks/usePage';

export default function PageHeader({onChange}) {
  const theme = useContext(ThemeContext);
  const {searchVisible, setSearchVisible, searchText, cancelHandler, onSearch} =
    usePage(onChange);

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
      leftContainerStyle={{flex: searchVisible ? 0 : 1}}
      centerComponent={
        !searchVisible ? (
          <Text py={5} color="white" fontSize={20} fontWeight={600}>
            IMAGE SEARCH
          </Text>
        ) : (
          <Box width="100%">
            <Input
              placeholder="search..."
              onChangeText={onSearch}
              value={searchText}
              border="1px solid"
              fontSize={16}
              color="white"
              borderColor="white"
              px={10}
              py={6}
              borderRadius="normal"
            />
          </Box>
        )
      }
      rightComponent={
        !searchVisible ? (
          <Button flex={1} alignItems="center" onPress={setSearchVisible}>
            <Search stroke={theme.colors.white} width={24} height={24} />
          </Button>
        ) : (
          <Button
            flex={1}
            alignItems="center"
            onPress={cancelHandler}>
            <Text fontSize={15} color="white">
              Cancel
            </Text>
          </Button>
        )
      }
    />
  );
}
