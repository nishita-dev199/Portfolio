import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundLines() {
  const [activeLine, setActiveLine] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Trigger next animation when one finishes
  const handleAnimationComplete = () => {
    let nextLine = Math.floor(Math.random() * 14);
    if (nextLine === activeLine) {
      nextLine = (nextLine + 1) % 14;
    }
    setActiveLine(nextLine);
    setAnimationKey((prev) => prev + 1);
  };

  // Generate the mathematically perfect 'S' shape paths
  const paths = Array.from({ length: 14 }).map((_, i) => {
    const spacing = 12; // Spacing between lines
    const cx = 800; // Center X of the first curve
    const cy = 150; // Center Y of the first curve
    
    const r = 40 + (i * spacing); // Inner radius of first curve
    const y1 = cy + r;
    
    // First U-Turn (Right to Left)
    const x2 = 1100;
    const innerR2 = 40;
    const maxY1 = cy + 40 + (13 * spacing);
    const cy2 = maxY1 + innerR2;
    const r2 = cy2 - y1;
    const y2 = cy2 + r2;
    
    // Second U-Turn (Left to Right)
    const x3 = 600;
    const innerR3 = 40;
    const maxY2 = cy2 + (cy2 - (cy + 40)); 
    const cy3 = maxY2 + innerR3;
    const r3 = cy3 - y2;
    const y3 = cy3 + r3;

    return `M${cx - r},-100 L${cx - r},${cy} A${r},${r} 0 0,0 ${cx},${y1} L${x2},${y1} A${r2},${r2} 0 0,1 ${x2},${y2} L${x3},${y2} A${r3},${r3} 0 0,0 ${x3},${y3} L1600,${y3}`;
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Render base background lines */}
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            className="text-white"
            strokeWidth="1.5"
            fill="none"
            opacity={0.20}
          />
        ))}

        {/* Render the animated shooting star with a fading tail */}
        {Array.from({ length: 12 }).map((_, j) => {
          const isHead = j === 0;
          const delay = j * 0.04; // Each segment follows slightly behind the previous
          
          // Fading purple tail, white head
          const color = isHead ? "#c2b0e4ff" : "#a68adaff"; // Tailwind purple-500
          const strokeWidth = isHead ? 3 : 2;
          const maxOpacity = isHead ? 1 : Math.max(0, 1 - (j * 0.09)); // Gradually fade tail
          
          return (
            <motion.path
              key={`star-${animationKey}-${j}`}
              d={paths[activeLine]}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.02, 0.02, 0],
                pathOffset: [0, 0, 0.98, 1],
                opacity: [0, maxOpacity, maxOpacity, 0]
              }}
              transition={{ 
                duration: 5, // Seconds it takes to traverse the whole path
                ease: "linear",
                times: [0, 0.05, 0.95, 1],
                delay: delay
              }}
              onAnimationComplete={
                j === 11 ? handleAnimationComplete : undefined
              }
              style={{
                filter: isHead ? 'drop-shadow(0 0 6px rgba(234, 187, 247, 0.9))' : 'drop-shadow(0 0 2px rgba(168, 85, 247, 0.4))'
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
