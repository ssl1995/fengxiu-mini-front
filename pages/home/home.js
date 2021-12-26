import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Categroy} from "../../model/categroy";
import {Activity} from "../../model/activity";

Page({

    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD:null,
    },

    /**
     * 生命周期函数--监听页面加载
     * 由于Js没有类型的约束，所以页面js不要做业务逻辑，而是做数据绑定
     * 页面的js类似controller
     */
    async onLoad(options) {
        await this.initAllData();
    },

    async initAllData() {
        const themeA = await Theme.getHomeLocationA();
        const bannerB = await Banner.getHomeLocationB();
        const grid = await Categroy.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();
        console.log(activityD)
        this.setData({
            themeA: themeA[0],
            bannerB,
            grid,
            activityD
        })
    },


    onPullDownRefresh: function () {

    },


    onReachBottom: function () {

    },


    onShareAppMessage: function () {

    }
})