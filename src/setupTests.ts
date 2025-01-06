import "@testing-library/jest-dom";
import "jest-styled-components";
import "@sinonjs/text-encoding";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.TextDecoder = TextDecoder as any;
