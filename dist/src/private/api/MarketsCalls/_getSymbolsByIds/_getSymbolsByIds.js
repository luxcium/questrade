"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
exports._getSymbolsByIds = function (credentials) { return function (stockId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/symbols?ids=" + stockId.join())()];
            case 1: return [2 /*return*/, (_a.sent()).symbols];
        }
    });
}); }; };
//# sourceMappingURL=_getSymbolsByIds.js.map