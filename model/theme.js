import {Http} from "../utils/http";

class Theme {

    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationG = 't-4';

    themes = []


    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationG}`
        // await是一定会返回一个promise
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            },
        })
    }

    async getHomeLocationA() {
        return this.themes.find(t => t.names === Theme.locationA);
    }

    async getHomeLocationE() {
        return this.themes.find(t => t.names === Theme.locationE);
    }

    async getHomeLocationF() {
        return this.themes.find(t => t.names === Theme.locationF);
    }

    async getHomeLocationG() {
        return this.themes.find(t => t.names === Theme.locationG);
    }

}

export {
    Theme
}