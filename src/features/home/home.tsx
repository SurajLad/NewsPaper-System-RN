import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { HomeStyles } from './styles/home_styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeTopSection from './sections/top_section';
import HomeMiddleSection from './sections/middle_section';

interface HomeScreenProps {
  props : any,
}

const HomePage : React.FC = ( {  } ) => {
  // const {numberCount, setCount} = useState(0);

  return (
    <ScrollView style= {{backgroundColor :'#FFFFFF'}}>
      <SafeAreaView 
          style = {{flex :1}} 
          edges={['top']} >

          <HomeTopSection user={{name : 'Suraj Lad'}}/>

          <HomeMiddleSection />
  
      </SafeAreaView>
    </ScrollView>
    
  );
};

export default HomePage;
