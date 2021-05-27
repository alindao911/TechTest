import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {loadingHandler} from '../../common/ReduxLoader';
import {Loader} from '../../components';
import {FETCH_POST_COMMENTS_REQUEST} from '../store/action-types';
import {
  fetchPostCommentsFailure,
  fetchPostCommentsRequest,
} from '../store/actions';
import {styles} from './style';

const PostDetails = ({route}) => {
  const dispatch = useDispatch();
  const {post} = route.params;
  const {comments} = useSelector(({app}) => app);
  const loading = useSelector((state) =>
    loadingHandler([FETCH_POST_COMMENTS_REQUEST])(state),
  );
  const [searchText, setSearchText] = useState('');
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    setFilteredComments([]);
    dispatch(fetchPostCommentsRequest(post.id));
    return () => {
      dispatch(fetchPostCommentsFailure());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  const onSearchTextChange = (val) => {
    const matches = filteredComments.filter((item) => {
      return (
        item.name.toLowerCase().includes(val.toLowerCase()) ||
        item.email.toLowerCase().includes(val.toLowerCase())
      );
    });
    setSearchText(val);
    setFilteredComments(matches);
    if (val === '') {
      setFilteredComments(comments);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.commentTitle}>{item.name}</Text>
        <Text style={styles.commentEmail}>{item.email}</Text>
        <Text style={styles.commentBody}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{post.title}</Text>
        <Text style={styles.itemBody}>{post.body}</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        placeholder={'Search Comment (Name, Email)'}
        onChangeText={(val) => onSearchTextChange(val)}
      />
      <View style={styles.commentSeparatorContainer}>
        <View style={styles.commentSeparator} />
        <Text style={styles.commentSeparatorText}>Comments</Text>
        <View style={styles.commentSeparator} />
      </View>
      <FlatList
        data={filteredComments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        onRefresh={() => dispatch(fetchPostCommentsRequest(post.id))}
        refreshing={loading}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        style={styles.commentListContainer}
      />
      <Loader isVisible={loading} />
    </View>
  );
};

export default PostDetails;
