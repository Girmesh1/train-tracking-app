import React from 'react'
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import {Constants} from './utils'
import axios from 'axios';

const Notification = ({navigation}) => {
   const acceptNotification = () =>{
      axios.get(`${Constants.baseUrl}/drivers`)
      .then(res => {
        console.log(res)
      }).catch(err =>{
        console.log(e)
      })
    }
  

  return (
  <View>
   <SafeAreaView style={{backgroundColor:'#00d2fc', height:120, justifyContent:'center'}} >
     
     <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',
    paddingHorizontal:20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name='arrowleft' style={{color:'black', fontSize:30}}/>
      </TouchableOpacity>

      <Text 
          style={{alignItems:'center',
          justifyContent:'center',
          textAlign:'center',
          fontSize:42,
          fontWeight:'200',}}>Notification</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    
    </SafeAreaView>
       <View
          style={{marginTop:70,}}
       >
        <View
         style={{ alignItems:'center', justifyContent:'center',borderBottomWidth:3,borderEndWidth:3,borderLeftWidth:3,borderTopWidth:3,borderRadius:10,padding:10,borderColor:'#E9E9E9'}}
        >
            <Text
            
               style={{fontSize:25,width:'80%'}}
            >
                You duty is changed to the next 
                monday due to christmas holiday!
            </Text>

        </View>
        <View >
     <TouchableOpacity 
     
     onPress={acceptNotification}

    style={{flexDirection:'row-reverse',paddingVertical:10,right:25}}
    >
       
      <Text style={{fontSize:25,color:'#00d2fc'}}>Accept</Text>
     </TouchableOpacity>
    </View>
       </View>
       <View
          style={{marginTop:30}}
       >
        <View
        style={{ alignItems:'center', justifyContent:'center',borderBottomWidth:3,borderEndWidth:3,borderLeftWidth:3,borderTopWidth:3,borderRadius:10,padding:10,borderColor:'#E9E9E9'}}
        >
            <Text
            
               style={{fontSize:25,width:'80%'}}
            >
               we detect you were absent for 
               three conscutive days please contact
               the human resource head.
            </Text>

        </View>
        <View >
     <TouchableOpacity  

     onPress={acceptNotification}
     
   //   onPress={() => {
   //      alert('your request is');
   //  }}
    style={{flexDirection:'row-reverse',paddingVertical:10,right:25}}
    >
       
      <Text style={{fontSize:25,color:'#00d2fc'}}>Accept</Text>
     </TouchableOpacity>
    </View>
       </View>
       
  </View>
  )
}

export default Notification
