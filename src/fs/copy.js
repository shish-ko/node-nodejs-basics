import {readdir, mkdir, copyFile} from 'fs/promises'
import path from 'path';
import { getCurrentDirName } from './utils.js';

const _dirname=getCurrentDirName(import.meta.url)
const copy = async () => {
    try {   
        const filesToCopy=await readdir(path.join(_dirname, 'files'));
        await mkdir(path.join(_dirname, 'files_copy'), {recursive: false});
        filesToCopy.forEach(async(filename) => await copyFile(path.join(_dirname, 'files', filename), path.join(_dirname, 'files_copy', filename)));
    }  catch {
        throw Error('FS operation failed')
    }   
};

await copy();
