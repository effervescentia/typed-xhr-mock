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
  status(code: number): MockResponse;
  header(name: string, value: string): MockResponse;
  header(name: string): string;
  headers(): any;
  headers(headers: any): MockResponse;
  body(): string;
  body(body: string): MockResponse;
  timeout(): boolean | number;
  timeout(timeout: boolean | number): MockResponse;
}

interface MockHandler {
  (req: MockRequest, res: MockResponse): void;
}
