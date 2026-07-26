import fs from 'fs/promises';
import path from 'path';

async function replaceInDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = await fs.readFile(fullPath, 'utf8');
      
      // Theme replacements
      content = content.replace(/text-slate-400/g, 'text-slate-600');
      content = content.replace(/text-slate-300/g, 'text-slate-600');
      content = content.replace(/text-slate-500/g, 'text-slate-500');
      content = content.replace(/bg-slate-900\/50/g, 'bg-slate-100/50');
      content = content.replace(/bg-slate-900/g, 'bg-slate-50');
      content = content.replace(/bg-slate-800/g, 'bg-white');
      content = content.replace(/border-slate-800/g, 'border-slate-200');
      content = content.replace(/border-slate-700/g, 'border-slate-300');
      content = content.replace(/from-blue-400 to-cyan-300/g, 'from-blue-600 to-purple-600');
      content = content.replace(/bg-blue-600\/20/g, 'bg-blue-400/30');
      content = content.replace(/bg-cyan-600\/20/g, 'bg-purple-400/30');
      content = content.replace(/hover:bg-slate-800/g, 'hover:bg-slate-100');
      content = content.replace(/hover:text-white/g, 'hover:text-blue-600');
      content = content.replace(/text-slate-50/g, 'text-slate-900');
      content = content.replace(/bg-slate-700/g, 'bg-slate-200');
      
      await fs.writeFile(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

replaceInDir('./src/components').catch(console.error);
