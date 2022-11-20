import React from 'react'
import {Text, View,Center,Image,Heading} from 'native-base'
import Colors from "../../color";
import Tabs from "../../Components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
    <Center bg={Colors.pizza} pt={10} pb={6}>
      <Image source={{ 
        uri:"https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
      }}
       alt="profile"
       w={24}
       h={24}
       resizeMode="cover"
       />
     <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>

      DON MARCELINY
      
     </Heading>
     <Text italic fontSize={10} color={Colors.white}>
      Registrado desde 2022
     </Text>
    </Center>
    {/* TABS*/}
    <Tabs/>
  </>
  )
}

export default ProfileScreen;