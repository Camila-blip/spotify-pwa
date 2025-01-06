import { TextEncoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = require("util").TextDecoder;
