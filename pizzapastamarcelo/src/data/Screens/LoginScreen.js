import React from 'react'
import {Box,Heading,Image,Button,tab, Input,Text, View, VStack} from 'native-base'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Pressable } from 'react-native';



function LoginScreen({navigation}) {
  return (

    /* Imagen Y fondo Configuracion */

    <Box flex={1} bg={Colors.black }>
        <Image flex={1} alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../../assets/cover.png")}
        />

       {/*Configuracion del login correo*/} 

        <Box
                w="full"
                h="full"
                position="absolute"
                top="20"
                px="5"
                justifyContent="center"
                >
                <Heading>                       LOGIN</Heading>
                <VStack space={1} pt="2">
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
                   type="password"
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
                  LOGIN
                </Button>
                     {/*Configuracion SIGN Up*/}
                <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
                    <Text color={Colors.deepestGray}> REGISTRARSE</Text>
                </Pressable>
                
        </Box>                
    </Box>
  )
}

export default LoginScreen;