import { type JSX, splitProps } from 'solid-js';
import { cn } from '../../lib/utils';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
};

export function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ['class', 'variant', 'size', 'children']);

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
  };

  return (
    <button
      class={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        variants[local.variant || 'default'],
        sizes[local.size || 'default'],
        local.class
      )}
      {...others}
    >
      {local.children}
    </button>
  );
}
