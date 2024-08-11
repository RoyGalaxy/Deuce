import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import axios from "axios";

export default function(){
  const router = useRouter()
  
  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId: "668489590676-qbbae12h91s9g3ihdidnbi0ap6timoic.apps.googleusercontent.com",
    // offlineAccess: true,
    // hostedDomain: "",
    // forceCodeForRefreshToken: true,
    // accountName: "",
    // iosClientId: "",
    // googleServicePlistPath: "",
    // openIdRealm: "",
    // profileImageSize: 120,
  });

  return (
    <GoogleSigninButton 
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          storeData("@user", JSON.stringify(userInfo.user))
          
          const res = await axios.post("https://deuce.co.in/api/auth/google-signin", {
            googleId: userInfo.user.id,
            name: userInfo.user.name,
            email: userInfo.user.email
          })

          if(res.data.token){
            await storeData("@accessToken", res.data.token)
          }
          router.dismissAll()
          router.replace("(tabs)/app")
        } catch (error: any) {
          if(error.code === statusCodes.SIGN_IN_CANCELLED){
            // 
          } else if(error.code === statusCodes.IN_PROGRESS){
            // 
          } else if( error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
            // 
          }
        }
      }}
    />
  )
}
