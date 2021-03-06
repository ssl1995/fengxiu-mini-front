const {Http} = require("../utils/http");

/**
 * 轮播图Banner
 */
class Banner {
    static locationB = 'b-1';
    static locationG = 'b-2';

    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }

    static async getHomeLocationG() {
        return await Http.request({
            url: `banner/name/${Banner.locationG}`
        })
    }
}

export {Banner}