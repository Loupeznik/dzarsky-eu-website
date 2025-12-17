import type { JSX } from 'solid-js';

interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number;
}

export function ChevronLeftIcon(props: IconProps) {
  const size = props.size || 20;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m15 18-6-6 6-6"></path>
    </svg>
  );
}
