"use strict";

const chalk = require("chalk");

// --- MODERN CLI SPLASH SCREEN ---
console.log("\n" + chalk.magentaBright.bold(" ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"));
console.log(chalk.magentaBright.bold(" ┃") + chalk.cyanBright.bold("                  ✨ BAILEYS AKIKO ✨                   ") + chalk.magentaBright.bold("┃"));
console.log(chalk.magentaBright.bold(" ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"));

console.log(chalk.whiteBright("      Welcome to the Next-Gen WhatsApp Web API Library\n"));

console.log(chalk.cyanBright("  ➜ ") + chalk.whiteBright.bold("Developer : ") + chalk.redBright("Developed with 🔥 by Akiko"));
console.log(chalk.cyanBright("  ➜ ") + chalk.whiteBright.bold("Status    : ") + chalk.greenBright.bold("Online & Fully Optimized"));
console.log(chalk.cyanBright("  ➜ ") + chalk.whiteBright.bold("Features  : ") + chalk.yellowBright("Ghost Traffic, Auto-Reconnect And Many"));
console.log(chalk.cyanBright("  ➜ ") + chalk.whiteBright.bold("Version   : ") + chalk.gray("1.0.0 (Stable Build)"));

console.log(chalk.gray("\n ──────────────────────────────────────────────────────────\n"));

// --- EXPORT CORE BAILEYS ---
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
