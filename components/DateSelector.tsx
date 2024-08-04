import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateSelector = ({daySelector}) => {
  const date = new Date();

  const [selectedDate, setSelectedDate] = useState(JSON.stringify(date.getDate()));
  const [dates, setDates] = useState([]);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

  useEffect(() => {
    let weekDates = [];
    for(let i = 0; i < 7; i++){
      const date = new Date(new Date().getTime() + i * (24 * 60 * 60 * 1000));
      weekDates.push({ 
        day: days[date.getDay()],
        date: `${date.getDate()}`,
        month: months[date.getMonth()]
      })
    }
    setDates(weekDates)
  }, [])

  const handleDatePress = (day, date, month) => {
    setSelectedDate(`${date}`);
    daySelector(days.indexOf(day))
  };

  return (
    <View style={styles.container}>
      {dates.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.dateItem,
            selectedDate === `${item.date}` && styles.selectedDateItem,
          ]}
          onPress={() => handleDatePress(item.day, item.date, item.month)}
        >
          <Text
            style={[
              styles.day,
              selectedDate === `${item.date}` && styles.selectedText,
            ]}
          >
            {item.day}
          </Text>
          <Text
            style={[
              styles.date,
              selectedDate === `${item.date}` && styles.selectedText,
            ]}
          >
            {item.date}
          </Text>
          <Text
            style={[
              styles.month,
              selectedDate === `${item.date}` && styles.selectedText,
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
