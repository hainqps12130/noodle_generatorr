import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FONTS from '../constants/Fonts.tsx';


const Imagee =()=>{
  return(
    <View>
     <Image style={styles.Vector} source={require('../Image/Vector.png')} />
    </View>
  )
}
const Imagee2 =()=>{
  return(
    <View>
     <Image style={styles.Vector2} source={require('../Image/Vector.png')} />
    </View>
  )
}

const Information = ({navigation}: {navigation: any}) =>  {
  const [data, setData] = useState(false);
  const [data2, setData2] = useState(false);
  const [data3, setData3] = useState(false);


  
  console.log(data)
  return (
    <View style={styles.container}>
      <Image style={styles.Group2} source={require('../Image/backgroud.jpg')} />

      <View style={styles.ViewLogo}>
        <Image style={styles.logo} source={require('../Image/logo_alta.png')} />
      </View>

      <Text style={styles.text}>INFORMATION</Text>

      <View style={styles.ShapeView}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.girl} source={require('../Image/girl.png')} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textfullName}>Full name</Text>
            <Text style={styles.textfullName}>Birthday</Text>
            <Text style={styles.textfullName}>Gender</Text>
            <Text style={styles.textfullName}>Daparterment</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textTen}>Alice Mie</Text>
            <Text style={styles.textTen}>12/10/1999</Text>
            <Text style={styles.textTen}>Female</Text>
            <Text style={styles.textTen}>Design</Text>
          </View>
        </View>
      </View>

      <View style={styles.eatView}>
       
        <View style={{flexDirection: 'row'}}>
         
          <View >
          <View style ={{position: 'absolute',}}>
          {data ? (<Imagee />) : null  }
          </View>
        <TouchableOpacity onPress={() => setData(!data)}>
       
          <Image style={styles.eat} source={require('../Image/eat.png')} />
        </TouchableOpacity>
        </View>

        <View>
        <View style ={{position: 'absolute',}}>
          {data2 ? (<Imagee2 />) : null  }
          </View>
        <TouchableOpacity onPress={() => setData2(!data2)} >
          <Image style={styles.eat2} source={require('../Image/eat2.png')} />
          </TouchableOpacity>
        </View>

        <View>
        <View style ={{position: 'absolute',}}>
          {data3 ? (<Imagee2 />) : null  }
          </View>
        <TouchableOpacity  onPress={() => setData3(!data3)} >
          <Image style={styles.eat3} source={require('../Image/eat3.png')} />
          </TouchableOpacity>
         
         
        </View>
        </View>
       
      </View>

      <View style={styles.ViewText3}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text3}>3</Text>
          <Text style={styles.textCups}>cups of noodles left this month</Text>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress= {() => navigation.navigate('Done')}>
          <Text style = {styles.textBtn}>Get your noodles</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Group2: {
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
  ShapeView: {
    height: 170,
    width: 190 * 2,
    backgroundColor: '#FFC900',
    borderRadius: 36,
    marginLeft: 27,
    borderWidth: 8,
    borderColor: 'white',
    shadowRadius: 20,
    shadowOpacity: 0.3,
  },
  girl: {
    height: 105,
    width: 105,
    marginTop: 25,
    marginLeft: 20,
  },
  textfullName: {
    ...FONTS.h3,
    marginLeft: 10,
    marginTop: 3,
  },
  textTen: {
    ...FONTS.h4,
    marginLeft: 13,
    marginTop: 3,
  },
  eat: {
    height: 155,
    width: 90,
  },
  eatView: {
    marginTop: 10,
    marginLeft: 28,
  },
  eat2: {
    height: 155,
    width: 90,
    marginLeft: 50,
  },
  eat3: {
    height: 155,
    width: 90,
    marginLeft: 50,
  },
  text3: {
    color: '#D91313',
    fontWeight: 'bold',
  },
  textCups: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  ViewText3: {
    alignItems: 'center',
    marginTop: 7,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: '#FFB906',
    alignSelf:'center',
    marginTop: 65,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
  },
  textBtn: {
    textAlign: 'center',
    marginTop : 7,
    ...FONTS.h5,
  },
  Vector: {
    height: 105,
    width: 105,
    marginTop: 30,  
  },
  Vector2: {
    height: 105,
    width: 105,
    marginTop: 30, 
    marginLeft: 43
  }
  
});

export default Information;
