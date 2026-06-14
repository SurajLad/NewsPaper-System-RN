import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { QuickAction } from '../../features/home/sections/middle_section'
import { SvgUri } from 'react-native-svg'
import { useTheme } from '@react-navigation/native'




const SvgIconComponent : React.FC<QuickAction> = (action) => {

  const {colors} = useTheme();

  return (
    <View style={{flexDirection:'column', alignItems:'center', gap:8}}>
        <View style={{padding:12 , backgroundColor:action.backgroundColor,borderRadius:12}}>
            <SvgUri
                width="36"
                height="36"
                uri={action.icon} 
            />
        </View>
        <Text style={{textAlign:'center' }}>{action.title}</Text>
    </View>
  );
    
}

export default SvgIconComponent

const styles = StyleSheet.create({})