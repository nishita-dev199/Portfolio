import fs from 'fs/promises';
import path from 'path';

async function updateTheme(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await updateTheme(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('Hero.tsx') && !fullPath.includes('Navbar.tsx')) {
      let content = await fs.readFile(fullPath, 'utf8');
      
      // Update ocean to purple theme
      content = content.replace(/ocean-dark/g, 'purple-dark');
      content = content.replace(/ocean/g, 'purple-light');
      
      // Update section backgrounds if they exist to match the new body bg
      content = content.replace(/bg-slate-50/g, 'bg-[#F6F5F8]');
      
      // Update section headings to match the new bold uppercase theme
      // Matches: className="text-3xl md:text-4xl font-bold mb-4 text-purple-light" or similar
      content = content.replace(/text-3xl md:text-4xl font-bold/g, 'text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]');
      content = content.replace(/text-3xl font-bold/g, 'text-4xl font-black uppercase tracking-tighter text-[#1A1A1A]');
      
      // If there's an old text-purple-light on the heading, the above replace might result in `text-[#1A1A1A] ... text-purple-light`.
      // Let's clean up any double text colors on headings.
      content = content.replace(/text-\[#1A1A1A\](.*?)text-purple-light/g, 'text-[#1A1A1A]$1');
      
      await fs.writeFile(fullPath, content);
      console.log(`Updated theme in ${fullPath}`);
    }
  }
}

updateTheme('./src/components').catch(console.error);
