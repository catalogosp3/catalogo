interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' };
  const color = variant === 'dark' ? 'text-slate-900' : 'text-white';
  const boxColor = variant === 'dark' ? 'bg-blue-600' : 'bg-white';
  const textColorInBox = variant === 'dark' ? 'text-white' : 'text-blue-600';

  return (
    <div className="flex items-center gap-3 select-none">
      <div className={`flex items-center justify-center rounded-lg ${boxColor} ${size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-10 h-10' : 'w-8 h-8'}`}>
        <span className={`font-heading font-bold ${textColorInBox} ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-base'}`}>S</span>
      </div>
      <span className={`font-heading font-bold tracking-tight ${sizes[size]} ${color}`}>
        SP3
      </span>
    </div>
  );
}
