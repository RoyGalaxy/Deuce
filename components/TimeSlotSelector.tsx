import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const TimeSlotSelector = ({ turfs, day, selectedTimeSlot, timeSlotSelector, sport }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(true);
  const [slots, setSlots] = useState([]);
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    setSlots([])
    let slots = [];
    turfs?.forEach(turf => {
      if(turf.sport !== sport) return;
      let availableSlots = [];
      for(let i = 0; i < turf.availability.length; i++){
        if(turf.availability[i].day == days[day]){
          turf.availability[i].timeSlots.forEach(slot => {
            if(!slots.includes(slot.startTime)){
              // availableSlots.push(slot.startTime)
              availableSlots.push(slot)
            }
          })
          break;
        }
      }
      slots = [...slots, ...availableSlots]
    })
    setSlots(slots)
  }, [turfs, day, sport]);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text>Show available slots only</Text>
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          ios_backgroundColor="#3e3e3e"
          thumbColor={isEnabled ? 'rgb(74 222 128)' : '#eee'}
        />
      </View>
      <View style={styles.slotsContainer}>
        {slots.map((slot) => (
          <TouchableOpacity
            key={slot.startTIme}
            style={[
              styles.slot,
              selectedTimeSlot === slot.startTime && styles.selectedSlot,
            ]}
            className={`${!slot.available && 'bg-amber-100'}`}
            onPress={() => {slot.available && timeSlotSelector(slot)}}
          >
            <Text
              style={[
                styles.slotText,
                (selectedTimeSlot === slot.startTime) && styles.selectedSlotText,
              ]}
            >
              {slot.startTime}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  slotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
  },
  slot: {
    // width: '22%',
    flex: 1,
    maxWidth: '25%',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginVertical: 4,
  },
  selectedSlot: {
    backgroundColor: 'rgb(74 222 128)',
    borderColor: 'rgb(74 222 128)',
  },
  slotText: {
    color: '#888',
  },
  selectedSlotText: {
    color: '#fff',
  },
  unavailableText: {
    color: "#ccc"
  }
});

export default TimeSlotSelector;
