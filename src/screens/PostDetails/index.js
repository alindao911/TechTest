import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadingHandler} from '../../common/ReduxLoader';
import {Loader} from '../../components';
import {FETCH_POST_COMMENTS_REQUEST} from '../store/action-types';
import {
  fetchPostCommentsFailure,
  fetchPostCommentsRequest,
} from '../store/actions';

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
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        style={styles.commentListContainer}
      />
      <Loader isVisible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  commentBody: {fontWeight: '400', color: 'gray'},
  commentContainer: {marginBottom: 10},
  commentEmail: {fontStyle: 'italic', marginBottom: 5},
  commentListContainer: {flex: 1, paddingHorizontal: 15},
  commentSeparator: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    flex: 1,
    height: 1,
    alignSelf: 'center',
  },
  commentSeparatorContainer: {flexDirection: 'row', paddingHorizontal: 15},
  commentSeparatorText: {
    marginVertical: 10,
    fontWeight: '700',
    fontSize: 16,
    marginHorizontal: 10,
  },
  commentTitle: {fontWeight: 'bold', fontSize: 15},
  contentContainer: {flex: 1},
  itemBody: {fontWeight: '400', color: 'gray', fontSize: 16},
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 5,
  },
  itemTitle: {fontWeight: 'bold', fontSize: 18, marginBottom: 5},
  itemSeparator: {
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  searchInput: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
});

export default PostDetails;
