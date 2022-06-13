import { config } from "../config/config";
import { promisic } from "../miniprogram_npm/lin-ui/utils/util";

class Http {
    // 常用的异步是callback,promise,async和await

    /**
     * 封装微信小程序的Http请求
     * @param url 请求的Url
     * @param method 请求方法
     * @param data 请求数据
     * @returns {Promise<*>} 返回值
     */
    static async request({ url, method = 'GET', data }) {
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

    /**
     * 第一次分装request
     */
    static requestOne(url, data, method = 'GET', callback) {
        wx.request({
            url,
            data,
            method,
            header: {
                appkey: config.appKey
            },
            // 回调函数都是异步的
            success(res) {
                callback(res.data);
            }
        })
    }
}

export {
    Http
}