import { open } from 'fs/promises';
import { getCurrentDirName } from '../fs/utils.js';
import path from 'path';
import { stdout } from 'process';

const read = async () => {
    const filePath = path.join(getCurrentDirName(import.meta.url), 'files', 'fileToRead.txt');
    const file = await open(filePath);
    const stream = file.createReadStream();
    stream.on('data', (chunk) => {
        stdout.write(chunk);
    })
    
};

await read();