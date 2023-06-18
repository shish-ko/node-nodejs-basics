import { readdir } from "fs/promises";
import path from "path";
import { stdout } from "process";
import { getCurrentDirName } from "./utils.js";

const _dirname=getCurrentDirName(import.meta.url);

const list = async () => {
    try {
        const filesToCopy=await readdir(path.join(_dirname, 'files'));
        stdout.write(filesToCopy.join('  '));
    } catch {
        throw Error('FS operation failed');
    }
};

await list();