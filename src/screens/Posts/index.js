import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {loadingHandler} from '../../common/ReduxLoader';
import {NavigationService, routes} from '../../navigation';
import {FETCH_POSTS_REQUEST} from '../store/action-types';
import {fetchPostsRequest} from '../store/actions';
import {Loader} from '../../components';

const Posts = (props) => {
  const dispatch = useDispatch();
  const {posts} = useSelector(({app}) => app);
  const loading = useSelector((state) =>
    loadingHandler([FETCH_POSTS_REQUEST])(state),
  );
  const [searchText, setSearchText] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    dispatch(fetchPostsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const onSearchTextChange = (val) => {
    const matches = filteredPosts.filter((item) => {
      return item.title.toLowerCase().includes(val.toLowerCase());
    });
    setSearchText(val);
    setFilteredPosts(matches);
    if (val === '') {
      setFilteredPosts(posts);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.itemContainer}
        onPress={() =>
          NavigationService.navigate(routes.POST_DETAILS_SCREEN, {post: item})
        }>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemBody}>{item.body}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        placeholder={'Search Post (Title)'}
        onChangeText={(val) => onSearchTextChange(val)}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      <Loader isVisible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 15},
  itemBody: {fontWeight: '400', color: 'gray'},
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 10,
  },
  itemTitle: {fontWeight: 'bold', fontSize: 15, marginBottom: 5},
  searchInput: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 15,
    margin: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default Posts;
