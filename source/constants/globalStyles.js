/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 13:00:09
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-01 16:43:50
*/

import { Dimensions, StyleSheet } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const globalStyles = {

    inputFields: {
        height: 40,
        borderWidth: 0,
        margin: 10,
        width: width - 20,
        fontSize: 20,
        paddingLeft: 10
    },
    button: {
        backgroundColor: '#0095fc',
        height:55,
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledButton:{
        backgroundColor: 'grey'
    },

    error: {
        color: '#f55'
    }
}
export default globalStyles;

export const createdStyles = StyleSheet.create(globalStyles);
