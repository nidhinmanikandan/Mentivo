interface Props {
  title: string;
  small?: boolean;
}

export default function RoadmapNode({ title, small }: Props) {
  return (
    <div
      className={`
rounded-full
bg-[#B9DAFF]
text-black
font-medium
flex
items-center
justify-center
shadow-lg
transition-all
duration-300
${small ? "w-44 h-14 text-lg" : "w-60 h-16 text-2xl"}
`}
    >
      {title}
    </div>
  );
}
