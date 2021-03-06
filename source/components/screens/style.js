/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:57:46
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-27 13:11:21
*/


import {createStyle} from '../../utils/StyleOps'

let styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00E29E',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#999',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#999',
        marginBottom: 5,
    },
    inputFields: {
        backgroundColor: '#fff',
        borderColor:'#28313c',
        color: '#D2D3D3',
    },

    buttonText: {
        color: '#00E29E',
        fontSize: 20,
        textAlign:'center'
    },
    login: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        flex:1,
    },
    newUserBtn:{
        position:'absolute',
        bottom:0,
        width:'100%',
    }
};

export default createStyle(styles);

