import { open } from 'fs/promises';
import path from 'path';
import { getCurrentDirName } from '../fs/utils.js';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';

const decompress = async () => {
    const readFile = await open(path.join(getCurrentDirName(import.meta.url), 'files', 'archive.gz'));
    const readStream = readFile.createReadStream();
    const writeStream = createWriteStream(path.join(getCurrentDirName(import.meta.url), 'files', 'fileToCompress.txt'), {flags: 'w'});
    pipeline(readStream, createUnzip(), writeStream, (err) => {
        if (err) {
          console.error('Pipeline failed.');
        } else {
          console.log('Pipeline succeeded.');
        }
      },)
};

await decompress();