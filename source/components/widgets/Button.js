/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 16:49:52
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 16:50:04
*/

import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { createdStyles } from '../../constants/globalStyles';

let style = createdStyles.button;
export function Button(props) {
    // console.log('disabled',props.disabled)

    let insertedStyles = [style];
    if (props.style) {
        if (Array.isArray(props.style)) insertedStyles.push(...props.style)
        else insertedStyles.push(props.style)
    }
    if (props.disabled) insertedStyles.push(createdStyles.disabledButton)
    return (
        <TouchableOpacity  {...props}
            style={insertedStyles}
        >
            {props.children}
        </TouchableOpacity>
    )

}
