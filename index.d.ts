export function setup(): void;
export function teardown(): void;

export function mock(cb: MockHandler): void;
export function mock(method: string, url: string, cb: MockHandler): void;

export function get(url: string, cb: MockHandler): void;
export function post(url: string, cb: MockHandler): void;
export function put(url: string, cb: MockHandler): void;
export function patch(url: string, cb: MockHandler): void;
declare function del(url: string, cb: MockHandler): void;
export { del as delete };

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
