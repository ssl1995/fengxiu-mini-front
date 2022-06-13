import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu;
    skuList;

    constructor(spu) {
        this.spu = spu;
        this.skuList = spu.sku_list;
    }

    initFences() {
        const matrix = this._createMatrix(this.skuList);
        const fences = []
        let currentJ = -1
        // 转置
        matrix.forEach((ele, i, j) => {
            if (currentJ !== j) {
                currentJ = j;
                fences[currentJ] = this._createFence()
            }

            fences[currentJ].pushValueTitles(ele.value)
        })

        console.log(fences)
    }

    _createFence() {
        return new Fence();
    }

    _createMatrix(skuList) {
        const m = []

        skuList.forEach(sku => {
            m.push(sku.specs)
        })

        return new Matrix(m);
    }


}

export {
    FenceGroup
}