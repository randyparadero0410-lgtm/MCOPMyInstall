export type ContentData = {
  title: string;
  body: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
};

const randomString = (prefix: string): string => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

export const buildContentData = (): ContentData => {
  const title = randomString('article-title');
  return {
    title,
    body: `Body for ${title}`,
    category: 'News',
    tags: ['playwright', 'automation', 'publishing'],
    status: 'draft'
  };
};
