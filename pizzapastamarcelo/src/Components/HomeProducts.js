import React from 'react'
import {Box,Flex,Heading, Image, Pressable,ScrollView,Text,} from "native-base";
import Colors from '../color';
import products from "../data/Products";
import { useNavigation } from "@react-navigation/native";
import Rating from './Rating';


function HomeProducts() {
  const navigation = useNavigation()
  return (

   //Lista de Productos Aplicado al Home

    <ScrollView flex ={1}>
        <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >


                {products.map((product) => (
                <Pressable 
                onPress={() => navigation.navigate("Single",product)}
                key={product._id}
                w="47%"
                bg={Colors.white}
                rounded="md"
                shadow={5}
                pt={0.3}
                my={5}
                pb={4}
                overflow="hidden"
                >

                  <Image
                    source={{ uri: product.image }}
                    alt={product.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                  />


                <Box px={4} pt={1}>
                  <Heading size = "sm" bold>
                    ${product.price}
                  </Heading>
                  <Text fontSize={15} mt={1} isTruncated>
                    {product.name}
                  </Text>
                  {/*Calificacion*/}

                 <Rating value={product.rating}/>
                </Box>
                </Pressable>
                ))}
          
        </Flex>
    </ScrollView>

  );

}
export default HomeProducts;