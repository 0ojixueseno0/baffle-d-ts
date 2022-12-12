declare module 'baffle' {
  interface BaffleOptions {
    characters?: string;
    exclude?: string[];
    speed?: number;
  }

  export default function baffle(selector: string | Node | NodeList, options?: BaffleOptions): Baffle;

  export class Baffle {
    constructor(selector: string | Node | NodeList);
    text(fn: () => string): this;
    start(): this;
    reveal(duration?: number, delay?: number): this;
    once(): this;
    stop(): this;
    set(options: BaffleOptions): this;
    // 此处可以添加其他 Baffle.js 方法的声明
  }
}