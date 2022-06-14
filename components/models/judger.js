import { SkuCode } from "./sku-code";

class Judger {

    fenceGroup

    constructor(FenceGroup) {
        this.fenceGroup = FenceGroup;
        this.initPathDict();
    }

    initPathDict() {
        this.fenceGroup.spu.sku_list.forEach(s => {
            const skuCode = new SkuCode(s.code);
        });
    }

}
export {
    Judger
}
