import { Matrix } from "./matrix";
import { Fence } from "./fence";

class FenceGroup {
    spu;
    skuList;

    constructor(spu) {
        this.spu = spu;
        this.skuList = spu.sku_list;
    }

    /**
     * 转置1：fences里塞数据
     */
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

    /**
     * 转置2：封装成matrix里的方法
     */
    initFences1() {
        const matrix = this._createMatrix(this.skuList);

        const fences = []
        const At = matrix.transpose();


        At.forEach(r => {
            const fence = new Fence(r);
            fence.init();
            fences.push(fence);
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