class Cell {
    // 规格值
    title
    id

    constructor(spu) {
        this.title = spu.value;
        this.id = spu.value_id;
    }
}

export {
    Cell
}