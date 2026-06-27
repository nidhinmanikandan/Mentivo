type Props = {
  width?: number;
};

export default function Connector({ width = 50 }: Props) {
  return (
    <svg
      width={width}
      height="28"
      viewBox={`0 0 ${width} 28`}
      fill="none"
    >
      <path
        d={`M0 14 H${width}`}
        stroke="#7BBEFF"
        strokeWidth="2"
      />
    </svg>
  );
}