import React, { useState } from 'react'
import { SafeAreaView , Text, StyleSheet, View, Button, TextInput} from 'react-native';
 import axios from 'axios';

 import { Constants } from './utils';

const Welcomepage = ({navigation}) => {

  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const logIn = async () =>{
    setErrorMessage('');
    const data = {
      firstName: firstName,
      password: password
    }
    console.log(data)
    axios.post(`${Constants.baseUrl}/drivers/login`, data)
    .then(res => {
      console.log(res.data)
      const {message, loggedIn} = res.data;
      if(loggedIn){
        navigation.navigate('Home')
      }else{
        setErrorMessage(message)
      }
    }).catch(err =>{
      console.log(err)
    })

  }
  return (
    <View>
        <SafeAreaView style={{backgroundColor:'#00d2fc',height:130}} >
       <View
      >
        <Text
            style={{alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:30,
            fontWeight:'500',
            marginTop: 20,
            
     }}
        
        >TRAIN TRACKING SYSTEM</Text>
       </View>
     
    </SafeAreaView>
       
    <View >
      <View style={{alignItems:'center',justifyContent:'center', marginTop:60}}>

      <Text style={{padding: 10, fontSize: 42,fontWeight:'300'}}> welcome</Text>
      </View>
    


  <View style={{marginTop:40, flexDirection:'row-reverse',marginLeft:'10%'}}>
  <Button
  style={{backgroundColor:'#00d2fc', }}
  
 onPress={()=> navigation.navigate("Signup")}
  title="SignUp"
  color="#00d2fc"
/>
  </View>

  <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
  <Text style={{padding: 10, fontSize: 30,marginLeft:'-50%',fontWeight:'200'}}>
          username
        </Text>
        <TextInput
          style={{height: 40,width:'80%', borderBottomWidth:1,}}
          placeholder="username"
         onChangeText={setFirstName}
        />
         <Text style={{padding: 10, fontSize: 30,marginLeft:'-50%',fontWeight:'200'}}>
          Password
        </Text>
        <TextInput
          secureTextEntry={true} 
          style={{height: 40,width:'80%', borderBottomWidth:1}}
          placeholder="password"
          keyboardType='password'
         onChangeText={setPassword}
        />
        </View>
        {errorMessage && (
          <View>
            <Text>{errorMessage}</Text>
          </View>
        )}
        <View  style={{marginTop:10}}>
          
          <Button
  
  //onPress={()=> navigation.navigate("Home")}
  onPress={logIn}
  title="LogIn"
  color="#00d2fc"
/>

</View>
  </View>
 
    </View>
  )
};

const styles = StyleSheet.create({
    welcomeText: {
      
      color:'black',
      alignItems: 'center',
      justifyContent: 'center',
    
     
       },
   
  });





export default Welcomepage
