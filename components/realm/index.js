import { FenceGroup } from "../models/fence-group";

Component({
    properties: {
        spu: Object
    },

    observers: {
        'spu': function (spu) {
            if (!spu) {
                return;
            }
            const fenceGroup = new FenceGroup(spu);
            // 选择使用自定义手动转置
            fenceGroup.initFences();




            this.bindInitData(fenceGroup);

        }

    },


    data: {},
    methods: {
        bindInitData(fenceGroup) {

            this.setData({
                fences: fenceGroup.fences
            })
        }
    }
});
