// components/spu-preview/details.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: Object
    },

    data: {
        tags: Array
    },

    observers: {
        data: function (data) {
            if (!data || !data.tags) {
                return
            }
            const tags = data.tags.split('$')

            this.setData({
                tags
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onImgLoad(event) {
            // 监听获得图片真实的高宽
            const {width, height} = event.detail;
            /*
                width height
                340rpx ?
             */
            return {
                w: 340,
                h: height * 340 / width
            }
        },
        onItemTap(event) {
            // 拿到商品的pid
            const pid = event.currentTarget.dataset.pid;
            // 跳转到某个页面
            wx.navigateTo({
                url: `/pages/detail/detail?pid=${pid}`
            })
        }

    }
})
