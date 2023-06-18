import {createHash} from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getCurrentDirName } from '../fs/utils.js';
import { stdout } from 'node:process';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const text = await readFile(path.join(getCurrentDirName(import.meta.url), 'files', 'fileToCalculateHashFor.txt'));
    // hash.on('readable', () =>{
    //     const data = hash.read();
    //     if(data) {
    //         console.log(data.toString('hex'))
    //     }
    // } )     
    // hash.write(text);
    // hash.end();
    hash.update(text);
    stdout.write(hash.digest('hex'))
};

await calculateHash();