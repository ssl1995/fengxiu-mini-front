import {Http} from "../utils/http";

class Theme {
    static async getHomeLocationA() {
        // await是一定会返回一个promise
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            },
        })
    }
}

export {
    Theme
}