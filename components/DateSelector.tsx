import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState('19 Jul');
  const dates = [
    { day: 'FRI', date: '19', month: 'Jul' },
    { day: 'SAT', date: '20', month: 'Jul' },
    { day: 'SUN', date: '21', month: 'Jul' },
    { day: 'MON', date: '22', month: 'Jul' },
    { day: 'TUE', date: '23', month: 'Jul' },
    { day: 'WED', date: '24', month: 'Jul' },
  ];

  const handleDatePress = (date, month) => {
    setSelectedDate(`${date} ${month}`);
  };

  return (
    <View style={styles.container}>
      {dates.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateItem,
            selectedDate === `${item.date} ${item.month}` && styles.selectedDateItem,
          ]}
          onPress={() => handleDatePress(item.date, item.month)}
        >
          <Text
            style={[
              styles.day,
              selectedDate === `${item.date} ${item.month}` && styles.selectedText,
            ]}
          >
            {item.day}
          </Text>
          <Text
            style={[
              styles.date,
              selectedDate === `${item.date} ${item.month}` && styles.selectedText,
            ]}
          >
            {item.date}
          </Text>
          <Text
            style={[
              styles.month,
              selectedDate === `${item.date} ${item.month}` && styles.selectedText,
            ]}
          >
            {item.month}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  dateItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  selectedDateItem: {
    backgroundColor: 'rgb(74 222 128)',
  },
  day: {
    fontSize: 16,
    color: '#888',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 14,
    color: '#888',
  },
  selectedText: {
    color: '#fff',
  },
});

export default DateSelector;
