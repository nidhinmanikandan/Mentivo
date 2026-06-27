interface Props {
  title: string;
  small?: boolean;
}

export default function RoadmapNode({ title, small }: Props) {
  return (
    <div
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-[#BFE0FF]
        text-black
        font-medium
        shadow-lg
        ${small ? "px-5 py-2 text-sm" : "px-8 py-3 text-base"}
      `}
    >
      {title}
    </div>
  );
}