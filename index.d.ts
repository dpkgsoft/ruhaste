import { GotOptions } from "got";

declare module "ruhaste" {
  export interface Options {
    /** If this is enabled, the function returns an url pointing at the *raw* hastebin file. */
    raw?: boolean

    /** Shorthand for using the `gotOptions` to set the `Content-Type`. */
    contentType?: boolean

    /** The server to upload the text to. This defaults to `https://hastebin.ru`. */
    server?: string;
  }

  export function createPaste (content: string, options?: Options, gotOptions?: GotOptions<string>): Promise<string>;
}