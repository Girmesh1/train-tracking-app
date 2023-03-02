import React ,{useState, useEffect}from 'react'

import { View , SafeAreaView, Text, Button,StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView ,{ PROVIDER_GOOGLE, Marker}from 'react-native-maps';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from '../env';
import * as  Location from 'expo-location';

const Home = ({navigation}) => {
  const [mapRegion, setMapRegion] = useState({
    latitude:9.1450,
    longitude:40.4897,
    latitudeDelta:0.04,
    longitudeDelta:0.01
  });
  // const userLocation = async () => {
  //  let {Status} = await Location.requestForegroundPermissionsAsync();
  //  if (Status !== 'granted'){
  //   setErrorMsg('permission to access loaction was denied');
  //  }
  //  let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
  //  setMapRegion({
  //   latitude: location.coords.latitude,
  //   longitude:location.coords.longitude,
  //   latitudeDelta:0.04,
  //   longitudeDelta:0.01
  //  });
  //  console.log(location.coords.latitude, location.coords.longitude);
  // }
 
  // useEffect(() => {
  // userLocation();
  // }, []);

  return (
    <View>
     <SafeAreaView style={{backgroundColor:'#00d2fc',height:120}} >
     
     <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    paddingHorizontal:20}}>
      <TouchableOpacity onPress={()=> navigation.navigate("MenuBar")}>
      <Ionicons name='ios-menu' style={{color:'black', fontSize:30}}/>
      </TouchableOpacity>

      <Text 
          style={{alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          fontSize:42,
          fontWeight:'200',}}>Home</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>

     </View>

    </SafeAreaView>
       <View>
        <Text
        style={{
            fontSize:30,
            fontWeight:'500',
            left: 30,
            top: 10,
            color:'#009bc3'
        }}
        >Your location</Text>
         {/* <Button title='Get Location' onPress={userLocation}/> */}
       </View>
       
       <View style={styles.container}>
      <MapView  
       style={styles.map} 
       provider={PROVIDER_GOOGLE}
       region={mapRegion} />

       <Marker coordinate={mapRegion} title='Marker'/>
       
      {/* <View style={styles.searchContainer}>

      <GooglePlacesAutocomplete
      style={{textInput: styles.input}}
       placeholder="Search"
       onPress={(data, details = null)=>{
        // 'details' is provides when fetchDtails = true
        console.log(data, details);
       }}
       query = {{
        key: GOOGLE_API_KEY,
        language: 'en'
       }}
       />
      </View> */}
     
    </View>
   
       
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    top:30,
    bottom:150
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  searchContainer:{
    position:'absolute',
    width:'90%',
    backgroundColor:'white',
    shadowOffset:{ width:2,height: 2},
    shadowOpacity:0.5,
    shadowColor:'black',
    shadowRadius:4,
    elevation: 4,
    padding:8,
    borderRadius:8,
  },
  input:{
    borderColor:'#888',
    borderWidth:1

  }
});


export default Home
