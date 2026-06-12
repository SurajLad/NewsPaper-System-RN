import { View, Text } from 'react-native'
import React from 'react'
import { HomeStyles } from '../styles/home_styles'
import MNPCard from '../components/mnp_card'

const HomeMiddleSection = () => {
  return (
    <>
      <View style = {[HomeStyles.top_row , { gap : 38 ,marginStart :32 , margin : 0, marginTop : 16}]}>
        <MNPCard
            icon='people'
            title='Active Customers'
            value='324'
        />
        <MNPCard
            icon='apartment'
            title='Buildings'
            value='18'
        />
      </View>
      <View style = {[HomeStyles.top_row , { gap : 38 ,marginStart :32 , margin : 0, marginTop : 24}]}>
        <MNPCard
            icon='info-outline'
            backgroundColor='#f66'
            title='Pending Dues'
            value='Rs.8,000'
        />
        <MNPCard
            icon='auto-graph'
            title='Collected Bill (This Month)'
            value='Rs.4,000'
        />
      </View>
    </>
    
  )
}

export default HomeMiddleSection