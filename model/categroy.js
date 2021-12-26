const {Http} = require("../utils/http");

class Categroy {
    static async getGridCategory() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Categroy
}