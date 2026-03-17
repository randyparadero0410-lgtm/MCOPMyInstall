import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApiClient {
  protected readonly api: APIRequestContext;

  constructor(apiContext: APIRequestContext) {
    this.api = apiContext;
  }

  protected async get(path: string): Promise<APIResponse> {
    return this.api.get(path);
  }

  protected async post<TBody extends object>(path: string, body: TBody): Promise<APIResponse> {
    return this.api.post(path, { data: body });
  }

  protected async patch<TBody extends object>(path: string, body: TBody): Promise<APIResponse> {
    return this.api.patch(path, { data: body });
  }
}
