import fs from 'node:fs';
import path from 'node:path';

async function globalSetup(): Promise<void> {
  const authDir = path.resolve('auth');
  const storageStatePath = path.join(authDir, 'storageState.json');

  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  // The UI-focused scaffold starts with an empty storage state.
  fs.writeFileSync(storageStatePath, JSON.stringify({ cookies: [], origins: [] }, null, 2));
}

export default globalSetup;
