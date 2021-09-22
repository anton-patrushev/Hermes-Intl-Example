import React from 'react';
import { Text, View } from 'react-native';

import { formatDate } from '../utils/formatDate';

import styles from './styles';

const TimeZoneTile = ({ timeZone = '', date = '' }) => {
  const timeZoneToDisplay = `TimeZone: ${timeZone}`;
  const formattedDateToDisplay = formatDate(date, timeZone);

  return (
    <View style={styles.tile}>
      <Text>{timeZoneToDisplay}</Text>
      <Text>{formattedDateToDisplay}</Text>
    </View>
  );
};

export default React.memo(TimeZoneTile);
