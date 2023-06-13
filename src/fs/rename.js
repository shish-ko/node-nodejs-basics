import {rename as renameFl} from 'fs/promises';
import { getCurrentDirName } from './utils.js';
import path from 'path';

const _dirname = getCurrentDirName(import.meta.url);
const rename = async () => {
    try{
        await renameFl(path.join(_dirname, 'files', 'wrongFilename.txt'), path.join(_dirname, 'files', 'properFilename.md'))
    } catch {
        throw Error('FS operation failed')
    }
};

await rename();