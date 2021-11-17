import React, {useContext} from 'react';
import {ActivityIndicator, Linking} from 'react-native';
import {ThemeContext} from 'styled-components';

import {User} from '../../icons';
import {Box, Text, Image, Button} from '../../base';

export default function DetailItem({
  urls,
  links,
  user,
  tags_preview,
  description,
  alt_description,
}) {
  const theme = useContext(ThemeContext);
  return (
    <Box my={10} mx={5}>
      <Image
        source={{
          uri:
            urls?.regular ||
            'https://avatars.githubusercontent.com/u/10505575?s=400&u=739be5f20f3130a1dee1a3eeab0921af821a5bb2&v=4',
        }}
        width="100%"
        height={500}
        borderRadius="normal"
        bg="#0000006c"
        PlaceholderContent={<ActivityIndicator />}>
        <Box flexDirection="row" alignItems="center" py={15} px={15}>
          <User stroke={theme.colors.white} width={16} height={16} />
          <Text ml={5} color="white" fontSize={15}>
            {user?.username}
          </Text>
        </Box>
      </Image>
      {alt_description && (
        <Text my={8} fontWeight={600} fontSize={18} color="black">
          {alt_description}
        </Text>
      )}
      {description && (
        <Text my={8} fontSize={16} color="black">
          {description}
        </Text>
      )}
      <Box flexDirection="row" my={20}>
        {tags_preview?.map((item, index) => (
          <Box
            key={index}
            bg="black"
            mx={3}
            px={6}
            py={4}
            borderRadius="normal">
            <Text color="white" fontSize={14}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>
      <Button onPress={() => Linking.openURL(links.download)}>
        <Box
          px={10}
          flex={1}
          py={6}
          borderRadius="normal"
          border="1px solid"
          borderColor="blue"
          bg="red">
          <Text fontSize={16} fontWeight={600} color="white">
            İndir
          </Text>
        </Box>
      </Button>
    </Box>
  );
}
