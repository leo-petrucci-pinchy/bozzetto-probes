declare module 'bozzetto/helpers' {
  export interface CssOutput {
    css: string;
  }

  export interface CssHelper {
    id: string;
    compile(files: Record<string, string>): Promise<CssOutput>;
  }

  export function tailwind(opts: { entry: string }): CssHelper;
  export function staticCss(opts: { files: string[] }): CssHelper;
}

declare module 'https://dev.petruc.ci/static/helpers/v0/bozzetto-helpers.mjs' {
  export interface CssOutput {
    css: string;
  }

  export interface CssHelper {
    id: string;
    compile(files: Record<string, string>): Promise<CssOutput>;
  }

  export function tailwind(opts: { entry: string }): CssHelper;
  export function staticCss(opts: { files: string[] }): CssHelper;
}
