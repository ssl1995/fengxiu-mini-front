// 将小程序内置非promise API转换为promise
// 通常是将wx.xx的api转换为返回promisic
// 使用
var promise = promisic(wx.request)({
    url: 'xx',
    data: "11",
});
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
export {
    promisic
}