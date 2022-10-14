import React  from "react";
import { Image, SafeAreaView, StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { TouchableOpacity } from "react-native-web";
import COLORS from '../../consts/colors';
import categories from "../../consts/categories";

const HomeScreen = () => {
    const[selectedCategoryIndex,setselectedCategoryIndex]= React.useState(0);

    const   ListCategories=()=>{
        //console.log(categories);
        
        return(
            //menu opcional A CAMBIAR POR BOTONES
            <View>
{categories.map( (cat) => {
	return (
		<TouchableOpacity key={cat.id}
			onPress={ (event)=>{
				alert(event.nativeEvent)
			}}>
			<Text>{cat.name}</Text>
		</TouchableOpacity>
	)}
)}
</View>
        )
    }
    //console.log(categories.map((cat) => cat));
    //console.log(categories.map((cat) => cat.name));

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={style.header}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 28}}>Hola,</Text>
                <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                  Bienvenido
                </Text>
              </View>
              <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
                ¿Què deseas ordenar hoy?              </Text>
            </View>
            


           
          </View>
       <View 
       style={{
        marginTop:40, 
        flexDirection:"row",
        paddingHorizontal:20,
        }}>

       <View style={style.inputContainer}>
        <Icon name="search" size={28}/>
        <TextInput 
        style={{flex:1, fontSize:18}} 
        placeholder="Buscar comida"
       />
       </View>
       <View style={style.sortBtn}>
        <Icon name="tune" size={28} color={COLORS.white}/>
       </View>
       </View>
       <ListCategories />
       </SafeAreaView> 
        
       );
      
};
const style =StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        juatifyContent:'space-betweeb',
        paddingHorizontal:20,

    },
    inputContainer:{
        flex:1,
        height:40,
        borderRadius:20,
        flexDirection:'row',
        backgroundColor:COLORS.light,
        paddingHorizontal:20,
    },
    sortBtn:{
        width:50,
        height:40,
        marginLeft:10,
        backgroundColor:COLORS.primary,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      category 
});

export default HomeScreen;