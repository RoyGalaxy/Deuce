import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import DateSelector from '../components/DateSelector';
import TimeSlotSelector from '../components/TimeSlotSelector';
import PriorityAlert from '../components/PriorityAlert';
import MatchBooking from '../components/MatchBooking';
import BlankSpaceFooter from '@/components/BlankSpaceFooter';
import StadiumInfo from '@/components/StadiumInfo';
import { useLocalSearchParams } from 'expo-router';
import SportSelector from '@/components/SportSelector';
import BookButton from '@/components/BookButton';

const BookScreen = () => {
  const { id } = useLocalSearchParams();
  const [stadium, setStadium] = useState(null)
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate())
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [sports, setSports] = useState([])
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

  const getTurf = async () => {
    const res = await fetch(`https://deuce.co.in/api/stadiums/${id}`)
    const jsonRes = await res.json()
    setStadium(jsonRes);
    setSports(jsonRes.sportsCategories);
    setSelectedSport(jsonRes.sportsCategories[0]);
  }

  useEffect(() => {
    getTurf();
  }, [])

  const handleDaySelector: (day: number) => void = (day) => {
    setSelectedDay(day);
  }

  const handleDateSelector = (date) => {
    setSelectedDate(date)
  }

  const handleMonthSelector = (month) => {
    setSelectedMonth(month);
  }

  const handleTimeSlotSelector = (timeSlot) => {
    setSelectedTimeSlot(timeSlot.startTime)
  }

  const handleSportSelector: (sport: string) => void = (sport) => {
    setSelectedSport(sport)
  }

  return (
    <View>
      <ScrollView className='bg-gray-50'>
        <View className='flex-1 flex-row'>
          <Image source={require("@/assets/images/background.jpg")} resizeMode="cover" className='flex-1 w-full aspect-video' />
        </View>
        <StadiumInfo name={stadium?.name}/>
        <SportSelector sports={sports} selectedSport={selectedSport} sportSelector={handleSportSelector}/>
        <DateSelector daySelector={handleDaySelector} selectedDate={selectedDate} dateSelector={handleDateSelector} monthSelector={handleMonthSelector}/>
        <TimeSlotSelector selectedTimeSlot={selectedTimeSlot} timeSlotSelector={handleTimeSlotSelector} turfs={stadium?.turfs} day={selectedDay} sport={selectedSport}/>
        {/* <PriorityAlert /> */}
        <MatchBooking />
        <BlankSpaceFooter />
      </ScrollView>
      <BookButton day={selectedDay} date={selectedDate} month={selectedMonth} timeSlot={selectedTimeSlot} sport={selectedSport} stadiumId={stadium?._id} />
    </View>
  );
};

export default BookScreen;
