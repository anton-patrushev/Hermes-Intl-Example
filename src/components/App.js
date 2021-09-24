import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import HermesInfo from './HermesInfo';
import TimeZoneTile from './TimeZoneTile';

import styles from './styles';

const getNow = () => new Date();

const GMT_TIMEZONE = 'GMT';
const BROKEN_CASE_GMT_TIMEZONE = 'gMt';

const AMERICA_NEW_YORK_TIMEZONE = 'America/New_York';
const BROKEN_CASE_AMERICA_NEW_YORK_TIMEZONE = 'AmEriCa/new_YORK';

const App = () => {
  const [date, setDate] = React.useState(getNow());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(getNow());
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView style={styles.content}>
        {/* <HermesInfo /> */}

        {/* <TimeZoneTile date={date} timeZone={GMT_TIMEZONE} /> */}
        {/* <TimeZoneTile date={date} timeZone={BROKEN_CASE_GMT_TIMEZONE} />
        <TimeZoneTile date={date} timeZone={AMERICA_NEW_YORK_TIMEZONE} />
        <TimeZoneTile date={date} timeZone={BROKEN_CASE_AMERICA_NEW_YORK_TIMEZONE} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(App);
