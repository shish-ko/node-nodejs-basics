import { createWriteStream } from 'fs'
import path from 'path';
import { getCurrentDirName } from '../fs/utils.js';
import { stdin } from 'process';

const write = async () => {
    const filePath = path.join(getCurrentDirName(import.meta.url), 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    stdin.on('data', (chunk) => {writeStream.write(chunk)})
};

await write();