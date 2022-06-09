class Paging {
    start;
    count;
    req;
    locker = false;
    url;
    moreData;
    accumulator;

    constructor(req, count = 10, start = 0) {
        this.start = start;
        this.count = count;
        this.req = req;
        this.url = req.url;
    }

    async getMoreData() {
        if (!this.moreData) {
            return;
        }

        if (this._getLocker()) {
            return;
        }

        const data = this._accumulator();

        this._releaseLocker();

        return data;

    }

    async _actualGetDate() {
        const req = this._getCurrentReq();
        let paging = await Http.reqest(req);

        if (!paging) {
            return null;
        }

        if (paging.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }

        this.moreData = this._moreData(paging.total_page, paging.page);

        if (this.moreData) {
            this.start += this.count;
        }

        // 返回结果需要统一数据结构
        // js也可以考虑使用class封装成对象

        this._accumulator(paging.items);

        return {
            empty: true,
            items: paging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }
    }

    _accumulator(items) {
        // 数组拼接
        this.accumulator = this.accumulator.concat(items);
    }

    _moreData(totalPage, pageNum) {
        // pageNum从0开始
        return pageNum < totalPage - 1;
    }



    _getCurrentReq() {
        let url = this.url;
        // 分页参数
        const params = `start=${this.start} &count=${this.count}`;

        if (url.indexOf("?") !== -1) {
            url += '&' + params;
        } else {
            url += '?' + params;
        }

        this.req.url = this.url;
        return this.req;
    }

    _getLocker() {
        if (this.locker) {
            return false;
        }

        this.locker = true;
        return true;
    }

    _releaseLocker() {
        this.locker = false;
    }
}



export {
    Paging
}