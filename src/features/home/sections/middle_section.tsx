import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { HomeStyles } from '../styles/home_styles'
import MNPCard from '../components/mnp_card'
import SvgIconComponent from '../../../ui/components/svg_icon_component';
import { useTheme } from '@react-navigation/native';



export interface QuickAction  {
  title : string,
  backgroundColor? : string,
  icon : string,
}


const HomeMiddleSection = () => {

const {colors} = useTheme();


const quickActionSectionList : QuickAction[] = [
  {title:'Generate\nBills' , icon :'https://www.svgrepo.com/show/526802/bill-list.svg',backgroundColor: colors.infoContainer },
  {title:'Print\nBills' , icon :'https://www.svgrepo.com/show/527333/printer.svg',backgroundColor: colors.infoContainer },
  {title:'Collect\nPayment' , icon :'https://www.svgrepo.com/show/527413/ruble.svg',backgroundColor: colors.infoContainer },
  {title :'Add\nCustomer', icon:'https://www.svgrepo.com/show/526706/user-id.svg', backgroundColor: colors.infoContainer }
];

  return (
    <>
      <View style = {[HomeStyles.top_row , { gap : 52 ,marginStart :42 , marginTop : 16}]}>
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
      <View style = {[HomeStyles.top_row , { gap : 52 ,marginStart : 42 , marginTop : 12}]}>
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

      <FlatList 
        style={{marginTop:8  , alignContent:'space-evenly'}}
        contentContainerStyle={{
          flexGrow: 1, 
          justifyContent: 'space-evenly',
        }}
        data={quickActionSectionList}
        horizontal={true}
        keyExtractor={(action : QuickAction) => action.title}
        renderItem= {({item} ) => <SvgIconComponent icon={item.icon} title={item.title} backgroundColor={item.backgroundColor}/>}
      ></FlatList>
    </>
  )
}

export default HomeMiddleSection