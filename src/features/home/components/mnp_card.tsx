import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circle from '../../../ui/components/circle'
import { HomeStyles } from '../styles/home_styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface MNPCardProps {
    title : string, 
    value : string,
    icon? : string,
    backgroundColor? : string,
    iconColor? : string,
}

const MNPCard : React.FC<MNPCardProps> = ({value, backgroundColor , icon, iconColor, title}) => {
  return (
    <View style={{alignContent :'flex-start' , alignItems : 'flex-start' , width : 100  }}>
      <Circle size={42}
          backgroundColor={backgroundColor}
          children =  <Icon name= {(icon!=null) ? icon : 'groups'} size={20} />
        /> 
      
      <Text style={[HomeStyles.titleTextStyle, {marginTop:16,marginBottom:8}]}>{value}</Text>
      <Text style={HomeStyles.caption}>{title}</Text>
    </View>
  )
}

export default MNPCard

const styles = StyleSheet.create({})