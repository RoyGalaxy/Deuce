import { useRouter } from 'expo-router';
import React, { createContext, useState, useEffect } from 'react'
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null)
  const [userToken, setUserToken] = useState(null);
  const [googleRequest, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    androidClientId: "668489590676-ke94i3h1ambkblsitegegrfusp5seegj.apps.googleusercontent.com",
    iosClientId: "668489590676-ekc8a2bitdlmt8po1684et1bk350tflq.apps.googleusercontent.com"
  })

  const login = () => {
    setUserToken("sometoken");;
    setIsLoading(false)
    resetRouterPath("/(tabs)/home")
  }
  
  const logout = () => {
    AsyncStorage.removeItem('@accessToken')
    AsyncStorage.removeItem('@user')
    setUserToken(null);
    setIsLoading(false);
    resetRouterPath("getStarted");
  }

  const resetRouterPath: (newPath: string) => void = (newPath) => {
    router.dismissAll()
    router.replace(newPath)
  }

  const getData = async (key, object) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        if(object){
          const user = JSON.parse(value);
          console.log(user.email)
          // setUserInfo(user)
        }else{
          setUserToken(value)
        }
      }
    } catch (e) {
      // error reading value
    }
  };


  useEffect(() => {
    setIsLoading(true);
    getData("@accessToken", false).then(() => setIsLoading(false))
    // getData("@user", true) 
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo, googleResponse, googlePromptAsync}}>
      {children}
    </AuthContext.Provider>
  )
}