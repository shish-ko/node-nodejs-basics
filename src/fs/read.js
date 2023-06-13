import {readFile} from 'fs/promises';
import { getCurrentDirName } from './utils.js';
import { stdout } from 'process';
import path from 'path';

const _dirname = getCurrentDirName(import.meta.url);

const read = async () => {
    try{
        const res = await readFile(path.join(_dirname, 'files', 'fileToRead.txt'), 'utf-8');
        stdout.write(res);
    } catch {
        throw Error('FS operation failed');
    }
};

await read();