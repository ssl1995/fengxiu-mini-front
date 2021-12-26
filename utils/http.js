import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

class Http {
    // success是异步的？常用的异步是callback,promise,async和await
    static async request({url, method = 'GET', data}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            // wx.request的请求体语法是header
            header: {
                appKey: `${config.appKey}`
            },
            // success: res => {
            //     callback(res.data);
            // }
        })
        return res.data;
    }
}

export {
    Http
}