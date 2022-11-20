import React from 'react'
import {Box, Button, Heading, Input, Text, View, VStack} from 'native-base'
import { Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MaterialIcons, Ionicons,FontAwesome } from "@expo/vector-icons";

function RegisterScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black }>
    <Image flex={1} alt="Logo"
    resizeMode="cover"
    size="lg"
    w="full"
    source={require("../../../assets/cover2.png")}
    />




   {/*Configuracion de titulo LOGIN*/} 
    <Box
            w="full"
            h="full"
            position="absolute"
            top="2"
            px="5"
            justifyContent="center"
            >
            <Heading>                 REGISTRARSE</Heading>
            <VStack space={1} pt="2"
            >
              {/*Configuracion nombre de usuario*/}
             <Input
               InputLeftElement={
                <FontAwesome name="user" size={20} color="black" />
               }
               variant="underlined"
               placeholder="Don Marceliny" size={30}
               w="100%"
               pl={2}
               color={Colors.black}
               boderBottomColor={Colors.black}
               />

        {/*Configuracion del login correo*/}
               <Input
               InputLeftElement={
                <MaterialIcons name="email" size={20} color="black" />
               }
               variant="underlined"
               placeholder="user@gmail.com" size={30}
               w="100%"
               pl={2}
               type="text"
               color={Colors.black}
               boderBottomColor={Colors.black}
               />

            {/*Configuracion del login password*/}
            <Input
               InputLeftElement={
                <Ionicons name="eye" size={20} color="black" />
               }
               variant="underlined"
               placeholder="********" size={30}
               w="100%"
               type="text"
               pl={2}
               co2or={Colors.black}
               boderBottomColor={Colors.black}
               />


            </VStack>
            <Button
            _pressed={{

              bg:Colors.black,
            }}
            my={7}
             w="100%" 
             rounded={50}
              bg={Colors.black}
              onPress={() => navigation.navigate("Bottom")}
              >
              COMPLETAR REGISTRO
            </Button>
                 {/*Configuracion SIGN Up*/}
            <Pressable mt={4} onPress={() => navigation.navigate("Login") }>
                <Text color={Colors.deepestGray}> LOGIN</Text>
            </Pressable>
            
    </Box>                
</Box>
  )
}

export default RegisterScreen;