"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const testScript = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < 100; i++) {
        yield wait(50);
        const res = yield fetch('http://localhost:3000');
        if (res.status == 429) {
            console.log(i, 'Rate Limited');
        }
        else {
            console.log(i, 'Success!');
        }
    }
});
const wait = (ms) => __awaiter(void 0, void 0, void 0, function* () { return new Promise(res => setTimeout(res, ms)); });
testScript();
