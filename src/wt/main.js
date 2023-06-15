import path from 'path';
import { Worker } from 'worker_threads';
import { getCurrentDirName } from '../fs/utils.js';
import {cpus} from 'os'

const performCalculations = async () => {
    const coresNumber= cpus().length;
    const workersRes=[];
    let workerData=10;
    for(let i=0; i < coresNumber; i++) {
        const worker= new Worker(path.join(getCurrentDirName(import.meta.url), 'worker.js'), {workerData: workerData++});
        worker.on('message', (msg)=>{
            workersRes.push(msg);
            if(workersRes.length  === coresNumber) {
                workersRes.sort((a, b) => a.id-b.id);
                workersRes.forEach((item) => delete item.id)
                const res = JSON.stringify(workersRes);
                process.stdout.write(res + '\n');
            }  
        });
    }
};
await performCalculations();