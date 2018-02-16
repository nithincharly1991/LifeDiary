/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:58:55
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 12:59:20
*/

import { StyleSheet } from 'react-native';
import globalStyle from '../constants/globalStyles';

export function mergeStyleSheets(...sheets) {
    let expectedStructure = Object.assign({}, ...sheets);
    let expectedClassNames = Object.keys(expectedStructure);
    let resultSheet = {}
    for (let className of expectedClassNames) {
        let candidateRules = sheets.map(sheet => sheet[className]);
        resultSheet[className] = Object.assign({}, ...candidateRules)
        // console.log('>>',resultSheet[className],className)
    }
    return resultSheet;
}

export function createStyle(sheet, parent = globalStyle) {
    return StyleSheet.create(mergeStyleSheets(globalStyle, sheet));
}
