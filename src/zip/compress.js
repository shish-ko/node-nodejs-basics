import { open } from 'fs/promises';
import path from 'path';
import { getCurrentDirName } from '../fs/utils.js';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import {createGzip} from 'zlib';

const compress = async () => {
    
    const readFile = await open(path.join(getCurrentDirName(import.meta.url), 'files', 'fileToCompress.txt'));
    const readStream = readFile.createReadStream();
    const writeStream = createWriteStream(path.join(getCurrentDirName(import.meta.url), 'files', 'archive.gz'), {flags: 'w'});
    pipeline(readStream, createGzip(), writeStream, (err) => {
        if (err) {
          console.error('Pipeline failed.');
        } else {
          console.log('Pipeline succeeded.');
        }
      },)
};

await compress();