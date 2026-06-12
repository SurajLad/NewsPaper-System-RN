import { View, Text } from 'react-native'
import React from 'react'
import { HomeStyles } from '../styles/home_styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Circle from '../../../ui/components/circle'

interface HomeTopSectionProps {
    user : {
        name : string,
        id? :number ,
        createdAt? : string,
    }, 
    
}
 
const HomeTopSection : React.FC<HomeTopSectionProps> = ({ user }) => {
  return (
    <View style={HomeStyles.top_row} >

        // First Column for Names
        <View style ={HomeStyles.top_column}>
           <Text style={[HomeStyles.caption , {fontWeight:'400',paddingBottom:4 , color : '#04A6572'}]}>
             Good morning,
           </Text>
          <Text style={[HomeStyles.caption , {paddingBottom:8, fontSize:28 , fontWeight:'600'}]}>
             {user.name}
          </Text>
            <Text style={[HomeStyles.caption , { color : '04A6572'}]}>
             Tueday , 09 June , 2026
           </Text>
        </View>
        // First Icon
        <Circle size= {48} 
            backgroundColor='#DCDCDC' 
            style={{marginEnd: 4}}
            children = <Icon name="search" size={22}  />
        /> 
        <Circle size= {48} 
            backgroundColor='#DCDCDC'
            style={{ marginStart:4 }}
            children = <Icon name="notifications-none" size={22}  />
        />
    </View>
  )
}

export default HomeTopSection