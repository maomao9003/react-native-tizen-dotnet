#!/usr/bin/env node
// @flow
import spawn from 'cross-spawn';

const script = process.argv[2];
const args = process.argv.slice(3);

const validCommands = ['package', 'bundle', 'launch'];

if (validCommands.indexOf(script) !== -1) {
    const result = spawn.sync(
        'node',
        ['--no-deprecation', require.resolve('../' + script)].concat(args),
        { stdio: 'inherit'}
    );
    process.exit(result.statis);
} else {
    console.log(
        `Invalid command '${script}'. Please check if you need to re-install react-native-tizen-dotnet package.
         Only support: package, bundle, launch.`
    );
}
