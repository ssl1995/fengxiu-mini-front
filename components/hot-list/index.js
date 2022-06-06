// components/hot-list/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        banner: Object
    },

    /*新式监听器*/
    observers: {
        // 监听上面定义的banner属性
        'banner': function (banner) {
            if (!banner || banner.items.length === 0) {
                return;
            }
            // 通过items里面数组的名字来监听
            const left = banner.items.find(t => t.name === 'left');
            const rightTop = banner.items.find(t => t.name === 'right-top');
            const rightBottom = banner.items.find(t => t.name === 'right-bottom');
            this.setData({
                left,
                rightTop,
                rightBottom
            })
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
})
