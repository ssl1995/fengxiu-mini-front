import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

Component({
    properties: {
        spu: Object,
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

            const judge = new Judger(fenceGroup);

            this.data.judge = judge;
        }

    },


    data: {
        judge: Object
    },


    methods: {
        bindInitData(fenceGroup) {

            this.setData({
                fences: fenceGroup.fences
            })
        },

        onCellTap(event) {
            const cell = event.detail.cell
            const x = event.detail.x;
            const y = event.detail.y;
            const judge = this.data.judge
            judge.judge(cell, x, y)

            this.setData({
                fences: judge.fenceGroup.fences
            })
        }


    }
});
