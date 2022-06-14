// 将小程序内置非promise API转换为promise
// 通常是将wx.xx的api转换为返回promisic

// 设计模式：代理模式
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                // promisic代理了内置的success
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};

/**
 * 数组组合
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
const combination = function (arr, size) {
    var r = [];
    function _(t, a, n) {
        if (n === 0) {
            r[r.length] = t;
            return;
        }
        for (var i = 0, l = a.length - n; i <= l; i++) {
            var b = t.slice();
            b.push(a[i]);
            _(b, a.slice(i + 1), n - 1);
        }
    }
    _([], arr, size);
    return r;
}
export {
    promisic,
    combination
}