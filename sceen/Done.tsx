import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FONTS from '../constants/Fonts.tsx';

const Done = ({navigation}: {navigation: any}) => {
    return(
        <View style = {styles.container}>
             <Image style={styles.Group3} source={require('../Image/backgroud.jpg')} />

             <View style={styles.ViewLogo}>
             <Image style={styles.logo} source={require('../Image/logo_alta.png')} />
            </View>

            <Text style={styles.text}>DONE</Text>
            <View style = {styles.ViewAvaDone}>
            <Image style={styles.imgDone} source={require('../Image/avatar_done.png')} />
            </View>

            <View style = {{flexDirection: 'row'}}>
            <Text style = {styles.text_Done}>Enjoy your noodles</Text>
            <Image style = {styles.imgTym} source={require('../Image/tym.png')}></Image>
            </View>

        <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Home_page')}>
          <Text style = {styles.textBtn}>Back to home</Text>
        </TouchableOpacity>
      </View>

      <Text style = {styles.textBlow}>Get them below</Text>
      <View style = {styles.ViewBelow}>
      <Image style = {styles.imgBelow} source={require('../Image/below.png')}></Image>
      </View>
    </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Group3: {
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
    imgDone: {
        height: 185,
        width: 160,
    },
    ViewAvaDone: {
        alignItems: 'center',
        marginTop: 10,
        
    },
    text_Done: {
        ...FONTS.h6,
        marginLeft: 60,
        marginTop: 10
    },
    imgTym: {
        height: 30,
        width: 40,
        marginTop: 23,
        marginLeft: 7
    },
    button: {
        height: 50,
        width: 250,
        backgroundColor: '#FFB906',
        alignSelf:'center',
        marginTop: 145,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: 'white',
    },
    textBtn: {
        textAlign: 'center',
        marginTop : 7,
        ...FONTS.h5,
    },
    textBlow: {
        ...FONTS.h7,
        textAlign: 'center',
        marginTop: 5
    },
    ViewBelow: {
        alignSelf: 'center'
    },
    imgBelow: {
        height: 45,
        width: 28
    }
    

});

export default Done;