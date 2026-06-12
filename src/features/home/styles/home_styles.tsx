import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    'body' : {
        color:'#FFFFFF'
    },
    'top_row' : {
        flexDirection : 'row',
        flex : 1,
        alignItems :'flex-start',
        justifyContent : 'flex-start',
        margin :24,
    },
    'top_column' : {
        flexDirection : 'column',
        flex : 2,
    },
    'caption' : {
        fontSize : 16,
        color : 'black',
    },
    'titleTextStyle' : {
        fontSize : 26,
        color : 'black',
        fontWeight : "600",
    },

});

export const HomeMiddleSectionStyles = StyleSheet.create({
    container : {
        color : '#FFFFFF',
    },
});