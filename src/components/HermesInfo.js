import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HermesInfo = () => {
  const runtimeVersion =
    global.HermesInternal?.getRuntimeProperties?.()['OSS Release Version'] ?? '';

  const isHermesEnabled = Boolean(global.HermesInternal);

  const isHermesEnabledText = `Hermes: ${isHermesEnabled ? 'Enabled' : 'Disabled'}`;
  const runtimeVersionText = `Runtime version: ${runtimeVersion || 'unknown'}`;

  return (
    <View style={styles.hermesInfo}>
      <Text>{isHermesEnabledText}</Text>
      <Text>{runtimeVersionText}</Text>
    </View>
  );
};

export default React.memo(HermesInfo);
