const args = process.argv.slice(2);

process.send(`Total number of arguments is ${args.length} \n`);
process.send(`Arguments: ${JSON.stringify(args)}\n`);

const echoInput = (chunk) => {
    if (chunk.includes('CLOSE')) process.exit(0);
    process.send(`Received from master process: ${chunk}\n`)
};

process.on('message', echoInput);
