const WORDS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'Tailwind',
  'Frontend',
  'UI',
  'UX',
  'GSAP',
  'CSS',
  'HTML',
  'Animation',
  'WebGL',
  'Three.js',
  'Framer',
  'Motion',
  'Hooks',
  'API',
  'Node',
  'Design',
];

function random(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export default function BackgroundWords() {
  const words = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    text: WORDS[Math.floor(random(i) * WORDS.length)],
    top: random(i + 10) * 100,
    left: random(i + 20) * 100,
    size: 70 + random(i + 30) * 120,
    rotate: random(i + 40) * 20 - 10,
    duration: 30 + random(i + 50) * 30,
    delay: -random(i + 60) * 30,
  }));

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      {words.map((word) => (
        <span
          key={word.id}
          className='absolute font-black whitespace-nowrap select-none text-foreground/5 opacity-50 dark:text-white/5 blur-[1px] animate-float'
          style={{
            top: `${word.top}%`,
            left: `${word.left}%`,
            fontSize: `${word.size}px`,
            transform: `rotate(${word.rotate}deg)`,
            animationDuration: `${word.duration}s`,
            animationDelay: `${word.delay}s`,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}
