import process from 'process';
const parseEnv = () => {
    const envVariables=Object.entries(process.env);
    const rssVariables = envVariables.filter(item => item[0].startsWith('RSS'))
    process.stdout.write(rssVariables.join('; ').replaceAll(',', '='))
};

parseEnv();