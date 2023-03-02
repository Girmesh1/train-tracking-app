import React , { useState }  from 'react'
import { SafeAreaView, View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import axios from 'axios';

import {Constants} from './utils'

const SignUp = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNo, setIdNo] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  

  const signUp = async () =>{
    setErrorMessage('');
    const data = {
      firstName: firstName,
      lastName:lastName,
      phoneNumber:phoneNumber,
      idNo:idNo,
      password: password
    }
     
    console.log(data)

    axios.post(`${Constants.baseUrl}/drivers/signup`,data)
    .then(res => {
      console.log(res.data)
      const {message, signUp} = res.data;
      if(signUp){
        navigation.navigate('Welcome')
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
          fontWeight:'200',}}>SignUp</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    </SafeAreaView>
    <View>
        <Text
             style={{
                fontSize:30,
                fontWeight:'500',
               textAlign:'center',
                // color:'#009bc3'
            }}
        
        > User Information</Text>
    </View>
    <View style={{padding: 0, justifyContent:'center',alignItems:'center' }}>
  <Text style={{padding: 5, fontSize: 20,marginLeft:'-58%',fontWeight:'400'}}>
          First Name
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
          placeholder="first name"
          onChangeText={setFirstName}
         
        />
        </View>

        <View style={{padding: 0, justifyContent:'center',alignItems:'center' , }}>
      <Text style={{padding: 5, fontSize: 20,marginLeft:'-58%',fontWeight:'400'}}>
         Last Name
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
          placeholder="last name"
          onChangeText={setLastName}
         
        />
        </View>

        <View style={{padding: 0, justifyContent:'center',alignItems:'center' , }}>
  <Text style={{padding: 5, fontSize: 20,marginLeft:'-49%',fontWeight:'400'}}>
         Phone Number
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
          placeholder="phone"
          onChangeText={setPhoneNumber}
         
        />
        </View>

        <View style={{padding: 0, justifyContent:'center',alignItems:'center' , }}>
  <Text style={{padding: 5, fontSize: 20,marginLeft:'-69%',fontWeight:'400'}}>
      idNo
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
          placeholder="idNo"
          onChangeText={setIdNo}
         
        />
        </View>
    
        <View style={{padding: 0, justifyContent:'center',alignItems:'center' , }}>
  <Text style={{padding: 5, fontSize: 20,marginLeft:'-60%',fontWeight:'400'}}>
       password
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
          placeholder="password"
          secureTextEntry={false}
          onChangeText={setPassword}
         
        />
        </View>
        <View>
            <Button
            title='SignUp'
            //onPress={()=> {alert('you are registered')}}
            onPress={signUp}
            />
        </View>
   </View>
  )
}

export default SignUp
