import { combination } from "../../utils/util";

class SkuCode {

    code;

    /**
     * code的第一个数字 = spuId
     */
    spuId;

    totalSegments = [];



    constructor(code) {
        this.code = code;
        this._splitToSegments();
    }

    _splitToSegments() {
        // 23$1-24#4-14
        const spuAndSpec = this.code.split('$');

        // 23
        this.spuId = spuAndSpec[0];

        // [[1-24]、[4-14]]
        const specCodeArray = spuAndSpec[1].split('#');

        const length = specCodeArray.length;

        for (let i = 1; i <= length; i++) {
            // 从[[1-24]、[4-14]]中选出1个、2个、len个的组合
            const segments = combination(specCodeArray, i);
            // [[1-24]、[4-14]]、[[1-24,4-14]]
            console.log(segments);
        }


    }

}

export {
    SkuCode
}