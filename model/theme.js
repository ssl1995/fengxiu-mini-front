import {Http} from "../utils/http";

class Theme {

    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';

    themes = [];

    /**
     * getThemes获取主题
     * @returns {Promise<void>}
     */
    async getThemes() {
        // 一次请求所有的names，减少http请求，因为后端接口提供了
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        // await是一定会返回一个promise
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
               names
            }
        })
    }

    // 函数式编程
    
    getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA);
    }

    getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE);
    }

    getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF);
    }

    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH);
    }

    static getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE);
    }

    static getThemeSpuByName(name) {
        return Http.request({
            url: `theme/name/${name}/with_spu`,
        })
    }

}

/**
 * js需要导出
 */
export {
    Theme
}