import {execFileSync} from 'node:child_process';import{readFileSync,mkdirSync}from'node:fs';import path from'node:path';
const root=process.cwd(),pkg=JSON.parse(readFileSync('packages/ui/package.json','utf8')),tag=process.env.UI_RELEASE_TAG;
if(tag && tag!==`ui-v${pkg.version}`)throw Error('Release tag must match package version');
mkdirSync('artifacts',{recursive:true});execFileSync('npm',['ci'],{cwd:path.join(root,'packages/ui'),stdio:'inherit'});execFileSync('npm',['pack','--pack-destination',path.join(root,'artifacts')],{cwd:path.join(root,'packages/ui'),stdio:'inherit'});
