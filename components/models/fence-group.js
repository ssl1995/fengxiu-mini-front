import { Matrix } from "./matrix";
import { Fence } from "./fence";

class FenceGroup {
    spu;
    skuList;
    fences = [];


    constructor(spu) {
        this.spu = spu;
        this.skuList = spu.sku_list;
    }

    /**
     * 转置1：封装成matrix里的方法
     */
    initFences() {
        const matrix = this._createMatrix(this.skuList);

        const fences = []
        const AT = matrix.transpose();


        AT.forEach(r => {
            const fence = new Fence(r);
            fence.init();
            fences.push(fence);
        })

        this.fences = fences;

        // console.log(this.fences)

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

    /**
 * 转置2：fences里塞数据
 */
    // initFences1() {
    //     const matrix = this._createMatrix(this.skuList);
    //     const fences = []
    //     let currentJ = -1
    //     // 转置
    //     matrix.forEach((ele, i, j) => {
    //         if (currentJ !== j) {
    //             currentJ = j;
    //             fences[currentJ] = this._createFence()
    //         }

    //         fences[currentJ].pushValueTitles(ele.value)
    //     })

    //     console.log(fences)
    // }


}

export {
    FenceGroup
}