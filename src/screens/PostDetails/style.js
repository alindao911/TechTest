import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  commentBody: {fontWeight: '400', color: colors.label_color},
  commentContainer: {marginBottom: 10},
  commentEmail: {fontStyle: 'italic', marginBottom: 5},
  commentListContainer: {flex: 1, paddingHorizontal: 15},
  commentSeparator: {
    borderWidth: 0.5,
    borderColor: colors.divider_color,
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
  itemBody: {
    fontWeight: '400',
    color: colors.secondary_text_color,
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 5,
  },
  itemTitle: {fontWeight: 'bold', fontSize: 18, marginBottom: 5},
  itemSeparator: {
    borderColor: colors.divider_color,
    borderBottomWidth: 0.5,
  },
  searchInput: {
    borderColor: colors.divider_color,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
});
