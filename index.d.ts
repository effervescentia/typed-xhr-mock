declare function setup(): void;
declare function teardown(): void;

declare function mock(cb: MockHandler): void;
declare function mock(method: string, url: string, cb: MockHandler): void;

declare function get(url: string, cb: MockHandler): void;
declare function post(url: string, cb: MockHandler): void;
declare function put(url: string, cb: MockHandler): void;
declare function patch(url: string, cb: MockHandler): void;
declare function del(url: string, cb: MockHandler): void;

export { setup, teardown, mock, get, post, put, patch, del as delete };

interface MockRequest {
  method(): string;
  url(): string;
  header(name: string): string;
  headers(): any;
  body(): string;
}

interface MockResponse {
  status(): number;
  status(code: number): void;
  header(name: string, value: string): void;
  header(name: string): string;
  headers(): any;
  headers(headers: any): void;
  body(): string;
  body(body: string): void;
  timeout(): boolean | number;
  timeout(timeout: boolean | number): void;
}

interface MockHandler {
  (req: MockRequest, res: MockResponse): void;
}
