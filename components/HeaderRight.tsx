import { View, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HeaderRight = () => {
  return (
    <View className='flex flex-row items-center gap-3 px-4'>
        <FontAwesome5 name="bell" size={24} color="#444" className="font-light"/>
        {/* <View style={{borderWidth: 3, borderColor: 'rgb(52 211 153)'}} className='p-[1px] rounded-full'>
          <Image source={require("@/assets/images/avatar.jpg")} className='bg-emerald-400 h-8 w-8 rounded-full'/>
        </View> */}
    </View>
  )
}

export default HeaderRight