interface CheckIconProps {
  color?: string;
}

export default function CheckIcon({ color }: CheckIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7.24558L7.08767 10.3333L12.4209 5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-testid="check-icon"
      />
    </svg>
  );
}