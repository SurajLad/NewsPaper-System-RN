import { View, Text, ViewStyle } from 'react-native'
import React from 'react'

interface CircleComponentProps {
    size : number,
    backgroundColor? : string,
    children? : React.ReactNode,
    style? : ViewStyle,
}

const Circle : React.FC <CircleComponentProps>  = ({size = 20,children, style , backgroundColor ='#DCDCDC'}) => {
  return (
    <View style={[{
        width : size ,
        height : size , 
        borderRadius : size/2,
        backgroundColor:backgroundColor,
        justifyContent : 'center',
        alignContent:'center' ,
        alignItems:'center'
     }, style] 
    }>

    {children},
    </View>
  )
}

export default Circle