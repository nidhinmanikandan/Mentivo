type Props = {
  resources: {
    title: string;
    url: string;
  }[];
};

export default function ToolResources({ resources }: Props) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold mb-8">
        Resources
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-card
              rounded-2xl
              p-6
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:border-[#7BBEFF]
              border
              border-transparent
            "
          >
            <h3 className="text-xl font-semibold">
              {resource.title}
            </h3>

            <p className="text-muted-foreground mt-2">
              Open Resource →
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}