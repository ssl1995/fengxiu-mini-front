import { FenceGroup } from "../models/fence-group";
import { Judger } from "../models/judger";

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

            // console.log(fenceGroup)
            this.bindInitData(fenceGroup);

            const judger = new Judger(fenceGroup);

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
