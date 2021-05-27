import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

import {colors} from '../../theme';

/**
 * Custom loader component that will render indeterminate or progress loader.
 * default - indeterminate loader
 * progress loader - if progress prop is defined
 * @param {Boolean} isVisible - show/hide modal
 * @param {Number} progress - { 0 - 1}
 * @return jsx
 */
const Loader = ({isVisible = false, progress}) => {
  const showProgress = progress !== undefined;
  const withProgressWrapper = {height: 150, width: 150};

  return (
    <Modal visible={isVisible} presentationStyle="overFullScreen" transparent>
      <View style={styles.container}>
        <View
          style={[
            styles.spinnerWrapper,
            showProgress && {...withProgressWrapper},
          ]}>
          <Progress.Circle
            indeterminate={!showProgress}
            progress={0.5}
            color={colors.secondary_text_color}
            showsText={true}
            size={showProgress ? 70 : 50}
            indeterminateAnimationDuration={1500}
            borderColor={colors.secondary_text_color}
            strokeCap="round"
            borderWidth={showProgress ? 3 : 4}
          />
          {showProgress && <Text style={styles.loadingLabel}>Loading...</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
  },
  spinnerWrapper: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingLabel: {
    marginTop: '8%',
    fontSize: 17,
    color: colors.secondary_text_color,
  },
});
