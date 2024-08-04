import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const TimeSlotSelector = ({ turfs, day, selectedTimeSlot }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('15:00');  const [showAvailableOnly, setShowAvailableOnly] = useState(true);
  const [slots, setSlots] = useState([]);
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const slots = ['14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '21:30', '22:00'];

  useEffect(() => {
    setSlots([])
    let slots = [];
    turfs?.forEach(turf => {
      let availableSlots = [];
      for(let i = 0; i < turf.availability.length; i++){
        if(turf.availability[i].day == days[day]){
          turf.availability[i].timeSlots.forEach(slot => {
            if(slot.available && !slots.includes(slot.startTime)){
              availableSlots.push(slot.startTime)
            }
          })
          break;
        }
      }
      slots = [...slots, ...availableSlots]
    })
    setSlots(slots)
  }, [turfs, day]);

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
            key={slot}
            style={[
              styles.slot,
              selectedSlot === slot && styles.selectedSlot,
            ]}
            onPress={() => setSelectedSlot(slot)}
          >
            <Text
              style={[
                styles.slotText,
                selectedSlot === slot && styles.selectedSlotText,
              ]}
            >
              {slot}
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
    justifyContent: 'space-between',
  },
  slot: {
    width: '22%',
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
});

export default TimeSlotSelector;
