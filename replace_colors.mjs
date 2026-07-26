import fs from 'fs/promises';
import path from 'path';

async function replaceInDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = await fs.readFile(fullPath, 'utf8');
      
      if (fullPath.endsWith('.tsx')) {
        // Text Colors
        content = content.replace(/text-slate-900/g, 'text-dark');
        content = content.replace(/text-slate-600/g, 'text-dark-light');
        content = content.replace(/text-slate-500/g, 'text-dark-light/80');
        
        // Ocean Accents
        content = content.replace(/text-blue-600/g, 'text-ocean');
        content = content.replace(/text-blue-500/g, 'text-ocean');
        content = content.replace(/text-blue-400/g, 'text-ocean');
        
        // Backgrounds
        content = content.replace(/bg-slate-50/g, 'bg-white');
        content = content.replace(/bg-slate-100/g, 'bg-white');
        content = content.replace(/bg-blue-600/g, 'bg-ocean');
        content = content.replace(/bg-blue-500/g, 'bg-ocean');
        content = content.replace(/bg-blue-400\/30/g, 'bg-ocean/20');
        content = content.replace(/bg-purple-400\/30/g, 'bg-ocean-dark/20');
        
        // Hovers
        content = content.replace(/hover:bg-blue-500/g, 'hover:bg-ocean-dark');
        content = content.replace(/hover:bg-blue-600/g, 'hover:bg-ocean-dark');
        content = content.replace(/hover:text-blue-600/g, 'hover:text-ocean-dark');
        content = content.replace(/hover:text-blue-500/g, 'hover:text-ocean-dark');
        
        // Borders and Gradients
        content = content.replace(/border-blue-500\/[0-9]+/g, 'border-ocean/30');
        content = content.replace(/border-blue-500/g, 'border-ocean');
        content = content.replace(/from-blue-600 to-purple-600/g, 'from-ocean to-ocean-dark');
        content = content.replace(/from-blue-400 to-cyan-300/g, 'from-ocean to-ocean-dark');
        content = content.replace(/shadow-blue-900\/[0-9]+/g, 'shadow-ocean/10');
        
        // Headings Accent (add text-ocean to h1, h2, h3)
        // Only if it doesn't already have text-ocean or text-transparent
        content = content.replace(/<h1([^>]*)className="([^"]*)"/g, (match, p1, p2) => {
          if (!p2.includes('text-ocean') && !p2.includes('text-transparent')) {
            return `<h1${p1}className="${p2} text-ocean"`;
          }
          return match;
        });
        content = content.replace(/<h2([^>]*)className="([^"]*)"/g, (match, p1, p2) => {
          if (!p2.includes('text-ocean') && !p2.includes('text-transparent')) {
            return `<h2${p1}className="${p2} text-ocean"`;
          }
          return match;
        });
        content = content.replace(/<h3([^>]*)className="([^"]*)"/g, (match, p1, p2) => {
          if (!p2.includes('text-ocean') && !p2.includes('text-transparent')) {
            return `<h3${p1}className="${p2} text-ocean"`;
          }
          return match;
        });
      } else if (fullPath.endsWith('.css')) {
        content = content.replace(/bg-slate-50/g, 'bg-white');
        content = content.replace(/text-slate-900/g, 'text-dark');
        content = content.replace(/selection:bg-blue-500\/30/g, 'selection:bg-ocean/30');
      }

      await fs.writeFile(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

replaceInDir('./src').catch(console.error);
