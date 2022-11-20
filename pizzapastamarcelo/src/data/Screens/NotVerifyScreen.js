import React from 'react'
import {Box,Image,Button,Text,Center, View, VStack} from 'native-base'
import  Colors  from "../../color";
import Buttone from '../../Components/Buttone';



function NotVerifyScreen() {
  return (
    <Box flex={5} bg={Colors.Green} safeAreaTop>
          <Center w="full" h={250}>
            <Image source={require("../../../assets/favicon2.png")} 
            alt="Logo"
            size="2xl"
            
            />

            </Center> 
            <VStack space={6} px={5} alignItems="center">
                    <Buttone bg={Colors.black} color={Colors.white}>
                      REGISTER
                      </Buttone>
                      <Buttone bg={Colors.deepGray} colors={Colors.black}>
                        LOGIN
                      </Buttone>           
                       </VStack>

    </Box>
  );
}

export default NotVerifyScreen;


