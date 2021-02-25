"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._getSymbolSearchCount = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../../../../utils");
// + _getSymbolSearchCount
/** _getSymbolSearch */
const _getSymbolSearchCount = (clientGetApi, errorlog = (...error) => error) => (prefix) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const endpoint = `/symbols/search?prefix=${utils_1.urlEncode(prefix)}`;
        const getSymbols = clientGetApi(endpoint, { noCaching: true });
        const symbols = yield getSymbols();
        return symbols.symbols.length;
    }
    catch (error) {
        void errorlog(error);
        return Number.NaN;
    }
});
exports._getSymbolSearchCount = _getSymbolSearchCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldFN5bWJvbFNlYXJjaENvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3ByaXZhdGUvYXBpL01hcmtldHNDYWxscy9fZ2V0U3ltYm9sU2VhcmNoL19nZXRTeW1ib2xTZWFyY2hDb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsNkNBQThDO0FBRTlDLDBCQUEwQjtBQUMxQix1QkFBdUI7QUFDaEIsTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxZQUdxQixFQUNyQixXQUFtQixDQUFDLEdBQUcsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQzdDLEVBQUUsQ0FBQyxDQUFPLE1BQWMsRUFBbUIsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsMEJBQTBCLGlCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMvRCxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQVcsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekUsTUFBTSxPQUFPLEdBQUcsTUFBTSxVQUFVLEVBQUUsQ0FBQztRQUVuQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0tBQy9CO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxLQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDbkI7QUFDSCxDQUFDLENBQUEsQ0FBQztBQWxCVyxRQUFBLHFCQUFxQix5QkFrQmhDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZXJyb3Jsb2cgfSBmcm9tICcuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc2lkZS1lZmZlY3RzJztcbmltcG9ydCB0eXBlIHsgUHJveHlIYW5kbGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL3Jlc291cmNlcy9zaWRlLWVmZmVjdHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBJU3ltYm9scywgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyB1cmxFbmNvZGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscyc7XG5cbi8vICsgX2dldFN5bWJvbFNlYXJjaENvdW50XG4vKiogX2dldFN5bWJvbFNlYXJjaCAqL1xuZXhwb3J0IGNvbnN0IF9nZXRTeW1ib2xTZWFyY2hDb3VudCA9IChcbiAgY2xpZW50R2V0QXBpOiA8Uj4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBoYW5kbGVyT3B0aW9uczogUHJveHlIYW5kbGVyT3B0aW9ucyxcbiAgKSA9PiAoKSA9PiBQcm9taXNlPFI+LFxuICBlcnJvcmxvZzogTG9nZ2VyID0gKC4uLmVycm9yOiBhbnlbXSkgPT4gZXJyb3IsXG4pID0+IGFzeW5jIChwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgL3N5bWJvbHMvc2VhcmNoP3ByZWZpeD0ke3VybEVuY29kZShwcmVmaXgpfWA7XG4gICAgY29uc3QgZ2V0U3ltYm9scyA9IGNsaWVudEdldEFwaTxJU3ltYm9scz4oZW5kcG9pbnQsIHsgbm9DYWNoaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IHN5bWJvbHMgPSBhd2FpdCBnZXRTeW1ib2xzKCk7XG5cbiAgICByZXR1cm4gc3ltYm9scy5zeW1ib2xzLmxlbmd0aDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2b2lkIGVycm9ybG9nKGVycm9yKTtcblxuICAgIHJldHVybiBOdW1iZXIuTmFOO1xuICB9XG59O1xuIl19