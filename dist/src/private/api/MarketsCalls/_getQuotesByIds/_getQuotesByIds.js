"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getQuotesByID
/** _getQuotesFromSymbolID */
exports._getQuotesByIds = function (credentials) { return function (ids) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/markets/quotes?ids=" + ids.join(','))()];
            case 1: return [2 /*return*/, (_a.sent()).quotes];
        }
    });
}); }; };
//# sourceMappingURL=_getQuotesByIds.js.map