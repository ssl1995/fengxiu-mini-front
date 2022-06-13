import {FenceGroup} from "../models/fence-group";

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

            fenceGroup.initFences();
        }

    },


    data: {},
    methods: {}
});
