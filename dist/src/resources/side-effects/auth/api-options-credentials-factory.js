"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiOptionsCredentialsFactory = void 0;
const utils_1 = require("../../../utils");
const default_behaviour_1 = require("../default-behaviour");
const _emptyCredentials_1 = require("./_emptyCredentials");
const apiOptionsCredentialsFactory = (apiOptions) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const practiceAccount = (_a = Boolean(apiOptions.practiceAccount)) !== null && _a !== void 0 ? _a : false;
    return Object.assign(Object.assign({}, _emptyCredentials_1._emptyCredentials()), { accountCallsPerHour: (_b = apiOptions.accountCallsPerHour) !== null && _b !== void 0 ? _b : 0, accountCallsPerSecond: (_c = apiOptions.accountCallsPerSecond) !== null && _c !== void 0 ? _c : 0, accountNumber: (_d = `${apiOptions.accountNumber}`) !== null && _d !== void 0 ? _d : '', apiVersion: (_e = apiOptions.apiVersion) !== null && _e !== void 0 ? _e : 'v1', authUrl: practiceAccount
            ? 'https://practicelogin.q.com'
            : 'https://login.questrade.com', caching: (_f = apiOptions.caching) !== null && _f !== void 0 ? _f : true, debugVebosity: (_g = apiOptions.debug) !== null && _g !== void 0 ? _g : 0, errorloger: (_h = apiOptions.errorloger) !== null && _h !== void 0 ? _h : default_behaviour_1.errorlog, fromCache: (_j = apiOptions.fromCache) !== null && _j !== void 0 ? _j : true, keyDir: (_k = apiOptions.keyDir) !== null && _k !== void 0 ? _k : './keys', keyFile: (_l = apiOptions.keyFile) !== null && _l !== void 0 ? _l : '', marketCallsPerHour: (_m = apiOptions.marketCallsPerHour) !== null && _m !== void 0 ? _m : 0, marketCallsPerSecond: (_o = apiOptions.marketCallsPerSecond) !== null && _o !== void 0 ? _o : 0, practiceAccount, proxyFactory: apiOptions.proxyFactory, seedToken: (_p = utils_1.preValidateToken(apiOptions)) !== null && _p !== void 0 ? _p : 'ERROR', testing: (_q = apiOptions.testing) !== null && _q !== void 0 ? _q : false });
};
exports.apiOptionsCredentialsFactory = apiOptionsCredentialsFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLW9wdGlvbnMtY3JlZGVudGlhbHMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzL2F1dGgvYXBpLW9wdGlvbnMtY3JlZGVudGlhbHMtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQ0FBa0Q7QUFDbEQsNERBQWdEO0FBQ2hELDJEQUF3RDtBQUVqRCxNQUFNLDRCQUE0QixHQUFHLENBQzFDLFVBQXNCLEVBQ1QsRUFBRTs7SUFDZixNQUFNLGVBQWUsU0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxtQ0FBSSxLQUFLLENBQUM7SUFFckUsdUNBQ0sscUNBQWlCLEVBQUUsS0FDdEIsbUJBQW1CLFFBQUUsVUFBVSxDQUFDLG1CQUFtQixtQ0FBSSxDQUFDLEVBQ3hELHFCQUFxQixRQUFFLFVBQVUsQ0FBQyxxQkFBcUIsbUNBQUksQ0FBQyxFQUM1RCxhQUFhLFFBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxFQUFFLG1DQUFJLEVBQUUsRUFDbEQsVUFBVSxRQUFFLFVBQVUsQ0FBQyxVQUFVLG1DQUFJLElBQUksRUFDekMsT0FBTyxFQUFFLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLDZCQUE2QjtZQUMvQixDQUFDLENBQUMsNkJBQTZCLEVBQ2pDLE9BQU8sUUFBRSxVQUFVLENBQUMsT0FBTyxtQ0FBSSxJQUFJLEVBQ25DLGFBQWEsUUFBRSxVQUFVLENBQUMsS0FBSyxtQ0FBSSxDQUFDLEVBQ3BDLFVBQVUsUUFBRSxVQUFVLENBQUMsVUFBVSxtQ0FBSSw0QkFBUSxFQUM3QyxTQUFTLFFBQUUsVUFBVSxDQUFDLFNBQVMsbUNBQUksSUFBSSxFQUN2QyxNQUFNLFFBQUUsVUFBVSxDQUFDLE1BQU0sbUNBQUksUUFBUSxFQUNyQyxPQUFPLFFBQUUsVUFBVSxDQUFDLE9BQU8sbUNBQUksRUFBRSxFQUNqQyxrQkFBa0IsUUFBRSxVQUFVLENBQUMsa0JBQWtCLG1DQUFJLENBQUMsRUFDdEQsb0JBQW9CLFFBQUUsVUFBVSxDQUFDLG9CQUFvQixtQ0FBSSxDQUFDLEVBQzFELGVBQWUsRUFDZixZQUFZLEVBQUUsVUFBVSxDQUFDLFlBQVksRUFDckMsU0FBUyxRQUFFLHdCQUFnQixDQUFDLFVBQVUsQ0FBQyxtQ0FBSSxPQUFPLEVBQ2xELE9BQU8sUUFBRSxVQUFVLENBQUMsT0FBTyxtQ0FBSSxLQUFLLElBQ3BDO0FBQ0osQ0FBQyxDQUFDO0FBM0JXLFFBQUEsNEJBQTRCLGdDQTJCdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwaU9wdGlvbnMsIENyZWRlbnRpYWxzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBwcmVWYWxpZGF0ZVRva2VuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgZXJyb3Jsb2cgfSBmcm9tICcuLi9kZWZhdWx0LWJlaGF2aW91cic7XG5pbXBvcnQgeyBfZW1wdHlDcmVkZW50aWFscyB9IGZyb20gJy4vX2VtcHR5Q3JlZGVudGlhbHMnO1xuXG5leHBvcnQgY29uc3QgYXBpT3B0aW9uc0NyZWRlbnRpYWxzRmFjdG9yeSA9IChcbiAgYXBpT3B0aW9uczogQXBpT3B0aW9ucyxcbik6IENyZWRlbnRpYWxzID0+IHtcbiAgY29uc3QgcHJhY3RpY2VBY2NvdW50ID0gQm9vbGVhbihhcGlPcHRpb25zLnByYWN0aWNlQWNjb3VudCkgPz8gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5fZW1wdHlDcmVkZW50aWFscygpLFxuICAgIGFjY291bnRDYWxsc1BlckhvdXI6IGFwaU9wdGlvbnMuYWNjb3VudENhbGxzUGVySG91ciA/PyAwLFxuICAgIGFjY291bnRDYWxsc1BlclNlY29uZDogYXBpT3B0aW9ucy5hY2NvdW50Q2FsbHNQZXJTZWNvbmQgPz8gMCxcbiAgICBhY2NvdW50TnVtYmVyOiBgJHthcGlPcHRpb25zLmFjY291bnROdW1iZXJ9YCA/PyAnJyxcbiAgICBhcGlWZXJzaW9uOiBhcGlPcHRpb25zLmFwaVZlcnNpb24gPz8gJ3YxJyxcbiAgICBhdXRoVXJsOiBwcmFjdGljZUFjY291bnRcbiAgICAgID8gJ2h0dHBzOi8vcHJhY3RpY2Vsb2dpbi5xLmNvbSdcbiAgICAgIDogJ2h0dHBzOi8vbG9naW4ucXVlc3RyYWRlLmNvbScsXG4gICAgY2FjaGluZzogYXBpT3B0aW9ucy5jYWNoaW5nID8/IHRydWUsXG4gICAgZGVidWdWZWJvc2l0eTogYXBpT3B0aW9ucy5kZWJ1ZyA/PyAwLFxuICAgIGVycm9ybG9nZXI6IGFwaU9wdGlvbnMuZXJyb3Jsb2dlciA/PyBlcnJvcmxvZyxcbiAgICBmcm9tQ2FjaGU6IGFwaU9wdGlvbnMuZnJvbUNhY2hlID8/IHRydWUsXG4gICAga2V5RGlyOiBhcGlPcHRpb25zLmtleURpciA/PyAnLi9rZXlzJyxcbiAgICBrZXlGaWxlOiBhcGlPcHRpb25zLmtleUZpbGUgPz8gJycsXG4gICAgbWFya2V0Q2FsbHNQZXJIb3VyOiBhcGlPcHRpb25zLm1hcmtldENhbGxzUGVySG91ciA/PyAwLFxuICAgIG1hcmtldENhbGxzUGVyU2Vjb25kOiBhcGlPcHRpb25zLm1hcmtldENhbGxzUGVyU2Vjb25kID8/IDAsXG4gICAgcHJhY3RpY2VBY2NvdW50LFxuICAgIHByb3h5RmFjdG9yeTogYXBpT3B0aW9ucy5wcm94eUZhY3RvcnksXG4gICAgc2VlZFRva2VuOiBwcmVWYWxpZGF0ZVRva2VuKGFwaU9wdGlvbnMpID8/ICdFUlJPUicsXG4gICAgdGVzdGluZzogYXBpT3B0aW9ucy50ZXN0aW5nID8/IGZhbHNlLFxuICB9O1xufTtcbiJdfQ==