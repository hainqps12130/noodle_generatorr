import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FONTS from '../constants/Fonts.tsx';
const Home_page = ({navigation}: {navigation: any}) => {
    return(
        <View style = {styles.container}>
        <Image style = {styles.Group1}
         source = {require('../Image/backgroud.jpg')}></Image> 

            <View style = {styles.ViewLogo}>
                <Image style = {styles.logo}
                 source={require('../Image/logo_alta.png')}></Image>
            </View>

            <Text style = {styles.text}>WELLCOME</Text>

            <View style = {styles.ViewPlay}>
                <Image style = {styles.imgPlay}
                 source = {require('../Image/play.jpg')}></Image>
            </View>
            
            <View style = {{flexDirection: 'row'}}>
            <View style = {styles.ViewScan}>
                <Image style = {styles.scan}
                 source = {require('../Image/scan.png')}></Image>
            </View>

            <Text style = {styles.text_Scan}>Follow the arrow to scan card</Text>
            </View>


       
            <View style = {{flexDirection: 'row'}}>
            <View style = {styles.ViewPhone}>
        <TouchableOpacity onPress = {() => navigation.navigate('Information')}>
            <Image style = {styles.phone} 
                 source = {require('../Image/phone.png')}></Image>
        </TouchableOpacity>    
            </View>
        
            
           

            <View style = {styles.ViewNext}>
            <Image style = {styles.next}
                 source = {require('../Image/next.png')}></Image>
            </View>
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    container:{
        flex: 1,
    },
    Group1: {
        height: 800,
        width: 440,
        position: 'absolute',
      
    
    },
    logo: {
        height: 100,
        width: 135,
    },
    ViewLogo: {
        alignItems: 'center',
        marginTop: 15,
    },
    text: {
        ...FONTS.h1,
        textAlign: 'center',
    },
    imgPlay: {
        height: 250,
        width: 407, 
    },
    ViewPlay: {
        alignItems: 'center',
    
        
    },
    scan: {
        height: 45,
        width: 45, 
    },
    ViewScan: {
        marginTop: 25,
        marginLeft: 35
    },
    text_Scan: {
        marginTop: 22,
        marginLeft: 25,
        ...FONTS.h2,
    },
    phone: {
        height: 150,
        width: 118, 
    },
    ViewPhone: {
        alignItems: 'center',
        marginTop: 65,
        marginLeft: 153
    },
    next: {
        height: 42,
        width: 100,
    },
    ViewNext: {
        marginTop: 120,
        marginLeft: 28,
    }
});
export default Home_page;