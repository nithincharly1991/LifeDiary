/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 16:50:49
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 16:50:59
*/

import React from 'react';
import { TextInput } from 'react-native';
import { createdStyles } from '../../constants/globalStyles';

let style = createdStyles.inputFields;
export function Input(props) {
    let insertedStyles;
    if (props.style) {
        insertedStyles = Array.isArray(props.style)
            ? [style, ...props.style]
            : [style, props.style];
    } else insertedStyles = style;
    return (
        < TextInput
            placeholderTextColor='#888'
            {...props}
            underlineColorAndroid='transparent'
            secureTextEntry={props.type == 'password'}
            style={insertedStyles}
        />
    )

}
