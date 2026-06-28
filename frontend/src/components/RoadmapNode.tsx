interface Props {
  title: string;
  small?: boolean;
  selected?: boolean;
}

export default function RoadmapNode({
  title,
 small,
  selected,
}: Props) {
  return (
    <div
      className={`
      rounded-full
      text-black
      font-medium
      flex
      items-center
      justify-center
      shadow-lg
      transition-all
      duration-300
      cursor-pointer
      hover:scale-105
      hover:shadow-xl
      ${
        selected
          ? "bg-violet-500 text-white ring-2 ring-violet-300"
          : "bg-[#B9DAFF]"
      }
      ${small ? "w-44 h-14 text-lg" : "w-60 h-16 text-2xl"}
    `}
    >
      {title}
    </div>
  );
}