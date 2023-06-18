import {argv} from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2);
    let res=[];
    for(let i =0; i< args.length; i+=2){
        res.push(`${args[i].slice(2)} is ${args[i+1]}`);
    }
    process.stdout.write(res.join(', '))
};

parseArgs();