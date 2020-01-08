"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expect_1 = __importDefault(require("expect"));
const index_1 = require("../../src/index");
describe('Main', () => {
    const spy = new index_1.HttpStatus();
    test('should returns code 200 when method OK is called', () => {
        expect_1.default(index_1.HttpStatus.OK).toBe(200);
    });
    test('should returns code "Accepted" when method getStatusText is called with param "202"', () => {
        expect_1.default(spy.getStatusText(202)).toBe('Accepted');
    });
    test('should returns code 505 when method getStatusCode is called with param "Bad Gateway"', () => {
        expect_1.default(spy.getStatusCode('Bad Gateway')).toBe(502);
    });
});
//# sourceMappingURL=index.spec.js.map