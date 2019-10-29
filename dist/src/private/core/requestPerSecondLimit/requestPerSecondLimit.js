"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../utils");
function requestLimiterFactory() {
    var isCalled = false;
    var callsQueue = [];
    return function requestLimiter(fn, hertz) {
        if (hertz === void 0) { hertz = 1; }
        var callToPop = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var poped, _a, myfn, mycb;
                return tslib_1.__generator(this, function (_b) {
                    if (callsQueue.length >= 1 && !isCalled) {
                        isCalled = true;
                        setTimeout(function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            isCalled = false;
                                            return [4 /*yield*/, callToPop()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, void 0];
                                    }
                                });
                            });
                        }, utils_1.perSeconds(hertz));
                        poped = callsQueue.pop();
                        _a = !!poped ? poped : [neverWillCb, neverCb], myfn = _a[0], mycb = _a[1];
                        mycb(null, myfn());
                        return [2 /*return*/, void 0];
                    }
                    return [2 /*return*/, void 0];
                });
            });
        };
        return function addToQueue(cb) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    callsQueue.unshift([fn, cb]);
                    callToPop();
                    return [2 /*return*/, void 0];
                });
            });
        };
    };
}
exports.myPromisify = function (addToQueue) {
    return new Promise(function (resolve, reject) {
        addToQueue(function (error, result) {
            if (!!error) {
                console.error(error);
                reject(error);
                return void 0;
            }
            resolve(result);
            return void 0;
        });
    });
};
function limitingRequest(limiterFactory) {
    var _this = this;
    var requestLimiter = limiterFactory();
    return function (hz) { return function (fn) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var addToQueue;
        return tslib_1.__generator(this, function (_a) {
            addToQueue = requestLimiter(fn, hz);
            return [2 /*return*/, exports.myPromisify(addToQueue)];
        });
    }); }; };
}
var neverWillCb = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        utils_1.void0();
        throw new Error('NEVER: lenght is validated prior to pop this should never occur');
    });
}); };
var neverCb = function (error, returnValue) {
    utils_1.void0({ returnValue: returnValue, error: error });
    throw new Error('NEVER: lenght is validated prior to pop this should never occur');
};
exports.requestPerSecondLimit = limitingRequest(requestLimiterFactory);
//# sourceMappingURL=requestPerSecondLimit.js.map