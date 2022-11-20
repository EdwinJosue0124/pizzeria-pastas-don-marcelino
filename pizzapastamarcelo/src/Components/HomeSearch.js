import { Box, HStack, Input } from 'native-base';
import React from 'react'
import { Text } from 'react-native'
import  Colors  from "../color";
import { Pressable } from 'react-native';
import { MaterialIcons, Ionicons,FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation()
  return (

                            /*Cuadro de busqueda*/
   <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.pizza}
      py={4}
      alignItems="center"
      safeAreaTop
      >

   


             {/*Icono de Compras*/} 
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
           px={1}
           rounded="full"
           position="absolute"
           top={-13}
           left={2}
           bg={Colors.red}
           _text={{
            color:Colors.white,
            fontSize: "11px",
           }}
           >
            5
            </Box>
      </Pressable>


      </HStack>
  )
}
export default HomeSearch;