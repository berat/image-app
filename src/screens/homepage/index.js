import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Button, List} from '../../components/base';
import {PageHeader, Layout, HomeItem} from '../../components/common';
import useHomepage from './hooks/useHomepage';

export default function Homepage() {
  const {loading, data, goDetail, searchChange} = useHomepage();

  return (
    <Layout>
      <PageHeader onChange={searchChange} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <List
          data={data}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          keyboardShouldPersistTaps="always"
          renderItem={({item}) => (
            <Button onPress={() => goDetail(item.id)}>
              <HomeItem {...item} />
            </Button>
          )}
        />
      )}
    </Layout>
  );
}
