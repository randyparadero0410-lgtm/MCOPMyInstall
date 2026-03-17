import { ContentPayload } from '../api-clients/publishing.api-client';

const randomString = (prefix: string): string => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

export const buildContentPayload = (): ContentPayload => {
  const title = randomString('article-title');
  return {
    title,
    body: `Body for ${title}`,
    metadata: {
      category: 'News',
      tags: ['playwright', 'automation', 'publishing'],
      status: 'draft'
    }
  };
};
