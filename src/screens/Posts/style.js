import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 15},
  itemBody: {fontWeight: '400', color: colors.secondary_text_color},
  itemContainer: {
    backgroundColor: colors.white,
    marginVertical: 5,
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 10,
  },
  itemTitle: {fontWeight: 'bold', fontSize: 15, marginBottom: 5},
  searchInput: {
    borderColor: colors.divider_color,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
});
