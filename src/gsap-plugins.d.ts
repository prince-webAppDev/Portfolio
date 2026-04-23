declare module 'gsap/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
    split(vars: any): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(vars?: any): void;
    paused(value?: boolean): any;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): any;
    kill(): void;
  }
}
