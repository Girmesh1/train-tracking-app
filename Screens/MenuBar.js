import React from 'react'
import { Button, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const MenuBar = ({navigation}) => {
  return (
    <View>
        <SafeAreaView  style={{backgroundColor:'#00d2fc',height:140}}>
    
     <Text   
                style={{
                textAlign:'start',
                fontSize:36,
                fontWeight:'200',
                marginTop: 20,
                left:20
            }}
          
        
          >MenuBar</Text>


        <View
        style={{
          top:-35,
          left:'86%'
         
        }}
     >
     <AntDesign name='user' style={{color:'black', fontSize:30}}/>
     </View>

   
     
        </SafeAreaView>
        <View style={{ backgroundColor:'#F8FCFB',maxWidth:'80%',top:0,height:720,borderEndWidth:1,borderLeftWidth:1,borderTopWidth:1,borderRadius:5,borderColor:'#C3CDCB' }}>
        <View style={{top:30,left:10}}>
        <View style={{ justifyContent:'space-between', alignItems:'start',
    paddingVertical:80}}>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

       <Ionicons name='home' style={{color:'#00d2fc', fontSize:30,}}/> 
        
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{paddingVertical:20}}> 

        <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Home</Text>
         
         </TouchableOpacity> 
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>

          <MaterialCommunityIcons name='hands-pray' style={{color:'#00d2fc', fontSize:30}}/>  
              <TouchableOpacity onPress={()=> navigation.navigate("Permission")}style={{paddingVertical:20}}> 
              <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Permission</Text>
          
           
           </TouchableOpacity>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <FontAwesome5 name='file-signature' style={{color:'#00d2fc', fontSize:30}}/> 
           <TouchableOpacity onPress={()=> navigation.navigate("Signture")} style={{paddingVertical:20}}> 
           <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Signature</Text>
           
           </TouchableOpacity></View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Ionicons name='notifications' style={{color:'#00d2fc', fontSize:30}}/> 
         <TouchableOpacity onPress={()=> navigation.navigate("Notification")} style={{paddingVertical:20}}> 
         <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Notification</Text>
           
           </TouchableOpacity></View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Octicons name='report' style={{color:'#00d2fc', fontSize:30}}/>  
           <TouchableOpacity onPress={()=> navigation.navigate("Report")} style={{paddingVertical:20}}> 
           <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Report</Text>
           
           </TouchableOpacity></View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <FontAwesome5 name='user-edit' style={{color:'#00d2fc', fontSize:30}}/> 
           <TouchableOpacity onPress={()=> navigation.navigate("Profile")} style={{paddingVertical:20}}> 
          
           <Text style={{color:'#00d2fc', fontSize:30,paddingLeft:10}}>Profile</Text>
           
           </TouchableOpacity></View>
          
        {/* <Button style={{top:0,fontSize:25,fontStyle:'bold'}} title='Home'/> */}
        </View>
        </View>

</View>
       
    </View>
  )
}

export default MenuBar
