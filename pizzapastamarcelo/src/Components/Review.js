import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "../Components/Notifications/Message";
import Buttone from "../Components/Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/* <Message
          color={Colors.deepGray}
          bg={Colors.pizza}
          bold
          children={"NO REVIEW" }
        /> */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                User Doe
                </Heading>
                <Rating value={4} />
                <Text my={3} fontSize={11}>Jan 12 2022</Text>
                <Message
                color={Colors.black}
                bg={Colors.white}
                size={12}
                children={
                    "La mejor soda del mundo"
                }
              />
      </Box>
      

     
{/* 
      <Box mt={6}>
       <Heading fontSize={15} bold mb={4}>
        RESEÑA DE ESTE PRODUCTO
       </Heading>
       <VStack space ={6}>
        <FormControl>
            <FormControl.Label
            _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
                 CALIFICACION
         </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Escoje tu calificacion"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={2} />,
              }}
              value={ratings}
              onValueChange={(e) => setRatings(e)}
              >
              <Select.Item label="1 - Malo" value="1" />
              <Select.Item label="2 - Regular" value="2" />
              <Select.Item label="3 - Bueno" value="3" />

              </Select>
              </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comentario
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="Deja tu comentario"
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.pizza} color={Colors.white}>
            ENVIAR
          </Buttone>
      



          <Message
            color={Colors.white}
            bg={Colors.pizza}
            children={"Inicia Sesion para dejar tu reseña"}
          />
        </VStack>
      </Box>
             */}

    </Box>
  );
}

