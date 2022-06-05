import { Theme } from "../../model/theme";
import { Banner } from "../../model/banner";
import { Categroy } from "../../model/categroy";
import { Activity } from "../../model/activity";

Page({

    // xxx.js里数学调用的类或者函数

    data: {
        themeA: null,
        themeE: null,
        themeF: null,
        bannerB: null,
        themeESpu: null,
        grid: [],
        activityD: null,
        bannerG: null,
        themeH: null
    },

    /**
     * onLoad:小程序默认加载数据的方法
     * 生命周期函数--监听页面加载
     * 由于Js没有类型的约束，所以页面js不要做业务逻辑，而是做数据绑定
     * 页面的js类似controller
     */
    async onLoad(options) {
        // 初始化数据交给initAllData方法
        await this.initAllData();
    },

    /**
     * 初始化数据
     * @returns {Promise<void>}
     */
    async initAllData() {
        // 获取全部主题数据,
        // 为了全部Page只请求一次Themes
        // 保存数据：1.page的data里、2.缓存、3.保存在app.js全局里 4.使用类的对象，保存数据
        const theme = new Theme();
        await theme.getThemes();

        const themeA = theme.getHomeLocationA();
        const themeE = theme.getHomeLocationE();


        let themeESpu = []
        // online = ture,表示上架
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu();
            if (data) {
                // slice：截取前8个用于展示
                themeESpu = data.spu_list.slice(0, 8);
            }
        }
        const themeF = theme.getHomeLocationF();

        const bannerB = await Banner.getHomeLocationB();
        const grid = await Categroy.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();

        const bannerG = await Banner.getHomeLocationG();

        const themeH = theme.getHomeLocationH();

        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    },


    onPullDownRefresh: function () {

    },


    onReachBottom: function () {

    },


    onShareAppMessage: function () {

    }
})