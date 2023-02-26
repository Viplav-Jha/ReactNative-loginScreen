import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import pattern from "../../assets/pattern.png";
import logo from "../../assets/mainlogo.png";
import button, { button1 } from "../../common.js/button";
import { formgroup, head1, head2, input, input1, label, link, link2 } from "../../common.js/formcss";
import { TextInput } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source={pattern} />

    <View style={styles.container1}>
      
      <View style={styles.s2}>
        <Text style={head1}>Create New Account</Text>
          <Text style={link2}>Already Registered? &nbsp; <Text style={link}> 
             Login here</Text></Text>
        <View style={formgroup}>
          <Text style={label}>Name</Text>
          <TextInput style={input} placeholder="  Enter your Name"/>
        </View>
        <View style={formgroup}>
          <Text style={label}>Email</Text>
          <TextInput style={input} placeholder="  Enter your Email"/>
        </View>
        <View style={formgroup}>
          <Text style={label}>DOB</Text>
          <TextInput style={input} placeholder="  Enter your DOB"/>
        </View>
        <View style={formgroup}>
          <Text style={label}>Password</Text>
          <TextInput style={input} placeholder="  Enter your Password"/>
        </View>
        <View style={formgroup}>
          <Text style={label}>Confirm Password</Text>
          <TextInput style={input} placeholder="  Confirm your Password"/>
        </View>
        <View style={formgroup}>
          <Text style={label}>Enter your Address</Text>
          <TextInput style={input1} placeholder="  Enter your Address"/>
        </View>
        <Text style={button1}>Signup</Text>
      </View>
    </View>
  </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
      },
      patternbg: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      },
      container1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      },
      s1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
      },
    
      small1: {
        color: "#fff",
        fontSize: 17,
      },
    
      h1: {
        fontSize: 30,
        color: "#fff",
      },
      s2: {
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
        height: "190%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      },
    link:{
        color:'#F50057',
        fontSize:15
    },
    fp:{
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        marginHorizontal:10,
        marginVertical:5,
    }
})