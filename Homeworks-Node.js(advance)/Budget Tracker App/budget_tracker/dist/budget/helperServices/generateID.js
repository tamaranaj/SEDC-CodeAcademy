"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = void 0;
const uuid_1 = require("uuid");
const generateID = () => {
    const id = (0, uuid_1.v4)();
    return id;
};
exports.generateID = generateID;
//# sourceMappingURL=generateID.js.map