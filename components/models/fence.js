import { Cell } from "./cell";

class Fence {
    cells = []
    specs
    // 规格名
    title
    id

    constructor(specs) {
        this.specs = specs;
        this.title = specs[0].key;
        this.id = specs[0].key_id
    }



    init() {
        this._initCells();
    }

    _initCells() {
        this.specs.forEach(s => {

            const cell = new Cell(s);
            // some:是如果有，就立马break返回
            // every:是全部遍历
            const equals = this.cells.some(c => {
                if (c.id === s.value_id) {
                    return true;
                }
            })

            if (equals) {
                return;
            }

            this.cells.push(cell);
        });
    }


    // pushValueTitles(title) {
    //     this.valueTitles.push(title)
    // }

}

export {
    Fence
}