import React , { useState }  from 'react'
import { View,Text, SafeAreaView ,Icon, TextInput, Button,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import axios from 'axios';

import { Constants } from './utils';

const Permission = ({navigation}) => {

  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const request = async () =>{
    setErrorMessage('');
    const data = {
      date: date,
      reason: reason
    }

    console.log(data)
    

    axios.post(`${Constants.baseUrl}/permissions`, data)
    .then(res => {
      console.log(res.data)
      const {message, request} = res.data;
      if(request){
       navigation.navigate('MenuBar')
      } else{
        setErrorMessage(message)
      }
    }).catch(err =>{
      console.log(err)
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
          fontWeight:'200',}}>Permission</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    </SafeAreaView>
    <View  style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
      <Text
       style={{height: 40,width:'80%',
               marginTop:20,
               fontSize:20
       }}
       > Do you want to ask permission?</Text>
    </View>
    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
      <Text
         style={{height: 40,width:'80%',
         marginTop:20,
         fontSize:30
 }}
      
      >Date</Text>
      <TextInput
        placeholder='   date'
        style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
        onChangeText={setDate}
     >

      </TextInput>
    </View>
    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
      <Text
         style={{height: 40,width:'80%',
         marginTop:20,
         fontSize:30
 }}
      
      >Reason</Text>
      <TextInput
      style={{height: 80,width:'80%',borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
      multiline={true}
      numberOfLines={4}
      placeholder="   Reason"
      onChangeText={setReason}

   />

    </View>
    <View style={{alignItems:'center',paddingVertical:40}}>
     <TouchableOpacity  
         onPress={request}
        // onPress={(request) => navigation.navigate('MenuBar')}
         >
      <Text style={{fontSize:25,color:'#00d2fc'}}>Request</Text>
     </TouchableOpacity>
    </View>
    
 </View>
  
  )
}

export default Permission
