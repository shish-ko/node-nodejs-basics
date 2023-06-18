import path from 'path';
import { fileURLToPath } from 'node:url';

export function getCurrentDirName(metaUrl) {
  const currentFileName = fileURLToPath(metaUrl);
  const dirname=path.dirname(currentFileName);
  return dirname;
}