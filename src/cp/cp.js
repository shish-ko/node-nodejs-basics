import {fork} from 'node:child_process';
import { stdin, stdout } from 'node:process';
import { getCurrentDirName } from '../fs/utils.js';

const spawnChildProcess = async (args) => {
   const childProcess = fork('files/script.js', args, {cwd: getCurrentDirName(import.meta.url)});   
   childProcess.on('message', (data)=> process.stdout.write(data));
   childProcess.on('exit', ()=> process.exit())
   process.stdin.on('data', (chunk) => childProcess.send(chunk.toString()));
};
// Put your arguments in function call to test this functionality
await spawnChildProcess(['Arg1', 'Arg2', 'Arg3']);
