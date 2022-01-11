import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Categroy} from "../../model/categroy";
import {Activity} from "../../model/activity";

Page({

    data: {
        themeA: null,
        themeE: null,
        bannerB: null,
        themeESpu: null,
        grid: [],
        activityD: null,
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
        // 获取全部主题数据,
        // 为了全部Page只请求一次Themes
        // 保存数据：page的data里、缓存、保存在app全局,最好的办法是使用类的对象保存状态和数据
        const theme = new Theme();
        await theme.getThemes();

        const themeA = await theme.getHomeLocationA();
        const themeE = await theme.getHomeLocationE();

        let themeESpu = []
        // 使用online属性进行判断
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu();
            if (data) {
                // 截取前8个用于展示
                themeESpu = data.spu_list.slice(0, 8);
            }
        }
        const bannerB = await Banner.getHomeLocationB();
        const grid = await Categroy.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();

        this.setData({
            themeA,
            themeE,
            themeESpu,
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