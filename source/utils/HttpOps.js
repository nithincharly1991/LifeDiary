/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-26 18:32:01
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-26 18:34:49
*/
import { REMOTE } from '../constants/keys';


const DEFAULT_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'dataType': 'json',

};

export default class HTTPHandler {
    constructor(token, defaultConfigs) {
        this.token = token;
        let headers = Object.assign({}, DEFAULT_HEADERS, defaultConfigs && defaultConfigs.headers)
        this.defaultConfigs = Object.assign({}, defaultConfigs, { headers });
    }

    async get(route, params, options) {
        let headers = Object.assign({}, this.defaultConfigs.headers, options && options.headers)
        let config = Object.assign({}, this.defaultConfigs, options, { verb: 'GET', headers });
        if (typeof params == 'object') {
            let qs = Object.keys(params).reduce((string, key) => {
                if (params[key]) string += (string && '&') + 'key=' + params[key];
                return string;
            }, '')
            route += '?' + qs
        }
        if (this.token)
            config.headers = Object.assign({ Authorization: 'Token ' + this.token }, config.headers);
        response = await HTTPHandler.xhr(route, config.body, config);
        return response.json();
    }

    async post(route, params, options) {
        let headers = Object.assign({}, this.defaultConfigs.headers, options && options.headers)
        let config = Object.assign({}, this.defaultConfigs, options, { verb: 'POST', headers });
        if (this.token)
            config.headers = Object.assign({ Authorization: 'Token ' + this.token }, config.headers);
        let body = JSON.stringify(params);
        let response;
        try {
            response = await HTTPHandler.xhr(route, body, config);
        } catch (e) {
            console.log(e)
            throw new Error("Network error. Please check your network connection");
        }
        // console.log('response', response)
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
    }

    // attribution: https://github.com/jlebensold/peckish/blob/master/app/lib/api.js#L26
    static xhr(route, body, config) {
        const host = config.host || REMOTE;
        const url = `${host}${route}`
        let options = { method: config.verb, body };//Object.assign( );
        if (config.headers) options.headers = config.headers;
        console.log('about to fetch', url, options)

        return fetch(url, options);
    }
}
