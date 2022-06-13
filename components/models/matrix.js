class Matrix {
    m

    /**
     * 构造器
     * @param matrix 二维数组
     */
    constructor(matrix) {
        this.m = matrix;
    }

    get rowNum() {
        return this.m.length;
    }

    get colNum() {
        return this.m[0].length;
    }

    forEach(cb) {
        for (let j = 0; j < this.colNum; j++) {
            for (let i = 0; i < this.rowNum; i++) {
                const ele = this.m[i][j];
                cb(ele, i, j);
            }
        }
    }

    /**
     * 将二维数组转置
     */
    transpose() {
        const destArr = [];

        for (let j = 0; j < this.colNum; j++) {
            destArr[j] = [];

            for (let i = 0; i < this.rowNum; i++) {
                destArr[j][i] = this.m[i][j];
            }
        }

        return destArr;
    }


}

export {
    Matrix
}