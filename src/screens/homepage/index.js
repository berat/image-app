import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Box, Button, List} from '../../components/base';
import {PageHeader, Layout, HomeItem} from '../../components/common';

const data = [
  {
    id: 1,
    image:
      'https://upload.wikimedia.org/wikipedia/tr/1/12/Avatar-Film-Posteri.jpg',
    username: 'Berat',
  },
  {
    id: 2,
    image:
      'https://i.internethaber.com/storage/files/images/2019/05/08/avatar-2-3-ve-4un-vizyon-tarihle-lna9_cover.jpg',
    username: 'Berat1',
  },
  {
    id: 3,
    image:
      'https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/08/14/440866-1854448434.jpg?itok=QD0-zZeA',
    username: 'Berat2',
  },
  {
    id: 4,
    image:
      'https://birparcatuhaftik.com/wp-content/uploads/2020/10/avatar-5k-k8-1920x1080-1-1600x900.jpg',
    username: 'Berat3',
  },
  {
    id: 5,
    image:
      'https://img-s3.onedio.com/id-610420ec6890588620a310b8/rev-0/w-900/h-506/f-jpg/s-b7217ef0d4e0accbf799d084151866dd1f9c734d.jpg',
    username: 'Berat4',
  },
  {
    id: 6,
    image:
      'https://images.hepsiburada.net/assets/EE/ProductDesc/avatarspage.jpg',
    username: 'Berat5',
  },
  {
    id: 7,
    image:
      'https://img-s1.onedio.com/id-610420a6f78094742024d62a/rev-0/w-620/f-jpg/s-78732af8012585a1a6c6aafdc6fec9ddcafe1429.jpg',
    username: 'Berat6',
  },
  {
    id: 8,
    image: 'https://static.boxofficeturkiye.com/news/1350x675/3247-j02nh.jpg',
    username: 'Berat7',
  },
];

export default function Homepage() {
  const navigation = useNavigation();

  const goDetail = id => {
    navigation.navigate('Detail', {id});
  };

  return (
    <Layout>
      <PageHeader />
      <Box mx={10} flex={1}>
        <List
          data={data}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => (
            <Button width="50%" onPress={() => goDetail(item.id)}>
              <HomeItem {...item} />
            </Button>
          )}
        />
      </Box>
    </Layout>
  );
}
