import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api.client';

export type ContentPayload = {
  title: string;
  body: string;
  metadata: {
    category: string;
    tags: string[];
    status: 'draft' | 'published';
  };
};

export class PublishingApiClient extends BaseApiClient {
  constructor(apiContext: APIRequestContext) {
    super(apiContext);
  }

  async createContent(payload: ContentPayload): Promise<APIResponse> {
    return this.post('/contents', payload);
  }

  async getContent(id: string): Promise<APIResponse> {
    return this.get(`/contents/${id}`);
  }

  async publishContent(id: string): Promise<APIResponse> {
    return this.patch(`/contents/${id}/publish`, {});
  }
}
