"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_API = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3001;
exports.URL_API = `https://localhost:${exports.PORT}`;
