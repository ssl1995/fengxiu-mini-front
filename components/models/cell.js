import { CellStatus } from "../../core/enum";

class Cell {
    // 规格值
    title
    id
    status = CellStatus.WAITING

    constructor(spu) {
        this.title = spu.value;
        this.id = spu.value_id;
    }
}

export {
    Cell
}