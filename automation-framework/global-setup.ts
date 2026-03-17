import { request } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { env } from './config/env';

async function globalSetup(): Promise<void> {
  const authDir = path.resolve('auth');
  const storageStatePath = path.join(authDir, 'storageState.json');

  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  // Keep setup resilient: create a baseline storage state if credentials are unavailable.
  if (!env.authUsername || !env.authPassword) {
    fs.writeFileSync(storageStatePath, JSON.stringify({ cookies: [], origins: [] }, null, 2));
    return;
  }

  const apiContext = await request.newContext({ baseURL: env.apiBaseUrl });
  try {
    const response = await apiContext.post('/auth/login', {
      data: {
        username: env.authUsername,
        password: env.authPassword
      }
    });

    if (response.ok()) {
      const payload = (await response.json()) as { token?: string; accessToken?: string };
      const token = payload.accessToken ?? payload.token;
      if (token) {
        fs.writeFileSync(
          storageStatePath,
          JSON.stringify(
            {
              cookies: [],
              origins: [
                {
                  origin: env.baseUrl,
                  localStorage: [{ name: 'authToken', value: token }]
                }
              ]
            },
            null,
            2
          )
        );
        return;
      }
    }

    fs.writeFileSync(storageStatePath, JSON.stringify({ cookies: [], origins: [] }, null, 2));
  } finally {
    await apiContext.dispose();
  }
}

export default globalSetup;
