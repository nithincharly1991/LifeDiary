/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 13:01:51
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 13:02:24
*/

import { Platform } from 'react-native';

export function IfAndroid(action) {
    if (Platform.OS === 'android')
        action && action()
}

export function IfIos(action) {
    if (Platform.OS === 'ios')
        action && action()
}

export function IfPlatformIn(targets, action) {
    if (!Array.isArray(targets)) return;
    if (targets.find(key => key === targetsPlatform.OS))
        action && action()
}
