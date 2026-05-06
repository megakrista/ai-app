import concurrently from 'concurrently';

concurrently([
    {
        name: 'server',
        command: 'bun run dev',
        cwd: 'packages/server',
        prefixColor: 'cyan',
    }
])

concurrently([
    {
        name: 'client',
        command: 'bun run dev',
        cwd: 'packages/client',
        prefixColor: 'green',
    }
])