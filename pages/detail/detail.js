import {Spu} from "./spu";

Page({
    properties: {},
    data: {},
    methods: {},

    onLoad: async function (options) {
        const pid = options.pid;

        const spu = await Spu.getDetail(pid);

        this.setData({
            spu
        })

    },
});
