import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {ThemeContext} from 'styled-components';

import {User} from '../../icons';
import {Box, Text, Image} from '../../base';

export default function HomeItem({id, urls, user}) {
  const theme = useContext(ThemeContext);
  return (
    <Box flex={1} my={10} mx={5}>
      <Image
        source={{
          uri:
            urls.small ||
            'https://avatars.githubusercontent.com/u/10505575?s=400&u=739be5f20f3130a1dee1a3eeab0921af821a5bb2&v=4',
        }}
        width="auto"
        height={200}
        borderRadius="normal"
        bg="#0000006c"
        PlaceholderContent={<ActivityIndicator />}>
        <Box flexDirection="row" alignItems="center" py={15} px={15}>
          <User stroke={theme.colors.white} width={16} height={16} />
          <Text ml={5} color="white" fontSize={15}>
            {user.username}
          </Text>
        </Box>
      </Image>
    </Box>
  );
}
