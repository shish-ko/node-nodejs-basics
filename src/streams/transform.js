const transform = async () => {
    process.stdin.on('data', (chunk) => process.stdout.write(String(chunk).split('').reverse().join('')+'\n') )
};

await transform();