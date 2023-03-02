import React from 'react'
import { SafeAreaView, Text, View,Image, TextInput, Button,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Profile = ({navigation}) => {
  return (
    <View>
     <SafeAreaView style={{backgroundColor:'#00d2fc', height:160, justifyContent:'center'}} >
     
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
          fontWeight:'200',}}>Profile</Text>
        <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>
    </SafeAreaView>

      <View style={{ alignItems:'center', justifyContent:'center',marginTop:-30}}>
            <Image 
            
            style={{height:100,width:100, alignItems:'center', justifyContent:'center', alignContent:'center', borderRadius:'80%'}}
            source={require('../assets/f.jpg')}/>
        </View>
        <View>
           <Text
              style={{alignItems:'center',
              justifyContent:'center',
              textAlign:'center',
              fontSize:30,
              fontWeight:'300',
              marginTop: 10
      
      
      
      }}
       >
            Girmachew Azanaw
           </Text>
           <Text
              style={{alignItems:'center',
              justifyContent:'center',
              textAlign:'center',
              fontSize:20,
              fontWeight:'200',
              marginTop: 10
      
      
      
      }}
           
           >
            0928541543
           </Text>
        </View>
        <View>
            <Text 
               style={{alignItems:'center',
               justifyContent:'center',
               textAlign:'center',
               fontSize:32,
               fontWeight:'400',
               marginTop: 20
       
       
       
       }}
             
            >Giorgis - Ayat</Text>
        </View>
        <View >
            <Text
                 
                 style={{
                 
                 left:60,
                 fontSize:30,
                 fontWeight:'350',
                 marginTop: 20
                     
                       }}
            >Edit Profile</Text>
        </View>
        <View>
          <Text
               style={{
                 
                left:60,
                fontSize:30,
                fontWeight:'300',
                marginTop: 10
                    
                      }}
          
          >Name</Text>
          <TextInput
          placeholder='name'
           style={{
            
            height: 40,
            width:'70%',
            left: 60,
            borderBottomWidth:1,
            borderEndWidth:1,
            borderLeftWidth:1,
            borderTopWidth:1,
            borderRadius:10,
            marginTop:10
                   
                   }}
          
           numberOfLines={1}
          
          />
        </View>
        <View>
          <Text
               style={{
                 
                left:60,
                fontSize:30,
                fontWeight:'300',
                marginTop: 10
                    
                      }}
          
          >Phone Number</Text>
          <TextInput
          placeholder='Phone'
          style={{
            
            height: 40,
            width:'70%',
            left: 60,
            borderBottomWidth:1,
            borderEndWidth:1,
            borderLeftWidth:1,
            borderTopWidth:1,
            borderRadius:10,
            marginTop:10
                   
                   }}
           numberOfLines={1}
          
          />
        </View>
        <View style={{alignItems:'center',paddingVertical:40}}>
     <TouchableOpacity  onPress={() => {
        alert('your request is');
      }}>
      <Text style={{fontSize:25,color:'#00d2fc'}}>Save</Text>
     </TouchableOpacity>
    </View>
    </View>
  )
}

export default Profile
