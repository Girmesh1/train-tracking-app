import React , { useState }  from 'react'
import { SafeAreaView,View, Text,  TextInput, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios';

import { Constants } from './utils';

const Signture = ({navigation}) => {

  const [idNo, setIdNo] = useState('');
  const [password, setPassword] = useState('');

  const onDuty = () =>{
    const data =  {
      idNo: idNo,
      password: password
    }


    axios.post(`${Constants.baseUrl}/signatures`, data)
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
          fontWeight:'200',}}>Signature</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    </SafeAreaView>
    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
        <Text
             style={{height: 40,width:'80%',
             marginTop:30,
             fontSize:30
     }}
        
        > Date</Text>
        <Text
             style={{height: 40,width:'80%',
             marginTop:30,
             fontSize:20
     }}
        
        > Today : 07-04-2015</Text>

    </View>
    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
        <Text
              style={{height: 40,width:'80%',
              marginTop:20,
              fontSize:30
      }}
        >Signature</Text>
        <TextInput 
               style={{height: 40,width:'80%',
               marginTop:20,
               fontSize:20,
               borderBottomWidth:1,
               borderEndWidth:1,
               borderLeftWidth:1,
               borderTopWidth:1,
               borderRadius:10
       }}
           placeholder='   Id no'
           onChangeText={setIdNo}
         
         />

    </View>
    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
        <TextInput 
           secureTextEntry={true} 
           placeholder='    password'
           style={{height: 40,width:'80%',
               marginTop:20,
               fontSize:20,
               borderBottomWidth:1,
               borderEndWidth:1,
               borderLeftWidth:1,
               borderTopWidth:1,
               borderRadius:10
       }}
           onChangeText={setPassword}
           />
    </View>
    <View style={{alignItems:'center',paddingVertical:40}}>
     <TouchableOpacity  
     onPress={onDuty}
     
    //  onPress={() => {
    //     alert('your request is');
    //   }}
      >
      <Text style={{fontSize:25,color:'#00d2fc'}}>On duty</Text>
     </TouchableOpacity>
    </View>
   </View>
  )
}

export default Signture
