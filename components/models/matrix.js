class Matrix {
    m

    /**
     * 构造器
     * @param matrix 二维数组
     */
    constructor(matrix) {
        this.m = matrix;
    }

    get RowNum() {
        return this.m.length;
    }

    get colNum() {
        return this.m[0].length;
    }

    forEach(cb) {
        for (let j = 0; j < this.colNum; j++) {
            for (let i = 0; i < this.RowNum; i++) {
                const ele = this.m[i][j];
                cb(ele, i, j);
            }
        }
    }


}

export {
    Matrix
}