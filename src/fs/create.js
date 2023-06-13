import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const currentFileName = fileURLToPath(import.meta.url);
    const dirname=path.dirname(currentFileName);
    try {
        await fs.writeFile(path.join(dirname, 'files', 'fresh.txt'), 'I am fresh and young', {flag: 'wx', });
    } catch(e){
        throw Error('FS operation failed');
    }
};

await create();