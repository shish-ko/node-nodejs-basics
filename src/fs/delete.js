import path from "path";
import { getCurrentDirName } from "./utils.js";
import { rm } from 'fs/promises';

const _dirname = getCurrentDirName(import.meta.url);
const remove = async () => {
   try {
    await rm(path.join(_dirname, 'files', 'fileToRemove.txt'));
   } catch {
    throw Error('FS operation failed');
   }
};

await remove();