import React , { useState } from 'react'
import { SafeAreaView,View,Text,Button,TextInput , SelectDropDown, TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign'

import axios from 'axios';

import { Constants } from './utils';

const Report = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

    const staff = ["manager", "human resource", "chief mechanics", "assistant"];
    const reportSubmit = () =>{

     


      const data = {
        title:title,
        description:description
      }
      axios.post(`${Constants.baseUrl}/reports`, data)
      .then(res => {
        console.log(res)
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
          fontWeight:'200',}}>Report</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    </SafeAreaView>

    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>


        <Text
             style={{height: 40,width:'80%',
             marginTop:30,
             fontSize:20
     }}
        
        >For Whom ?</Text>

          <SelectDropdown
         
         
        data={staff}
        
        />    
         </View>



    <View  style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
            
        <Text
              style={{height: 40,width:'80%',
              marginTop:20,
              fontSize:30
      }}
             >Title</Text>
        <TextInput
             style={{marginTop:20,height: 40,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
                     multiline={true}
                     numberOfLines={1}
                
                    onChangeText={setTitle}
   />

      
    </View>

    <View style={{padding: 10, justifyContent:'center',alignItems:'center' }}>
        <Text
              style={{height: 40,width:'80%',
              marginTop:20,
              
              fontSize:30
      }}
        
        >Description</Text>

            <TextInput
               style={{marginTop:20,height: 100,width:'80%', borderBottomWidth:1,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:10}}
                     multiline={true}
                     numberOfLines={4}
                     onChangeText={setDescription}
   />

      
    </View>
    <View style={{alignItems:'center',paddingVertical:40}}>
     <TouchableOpacity 
     onPress={reportSubmit}
      
      >
      <Text style={{fontSize:25,color:'#00d2fc'}}>Submit</Text>
     </TouchableOpacity>
    </View>
   
   </View>
  )
}

export default Report
