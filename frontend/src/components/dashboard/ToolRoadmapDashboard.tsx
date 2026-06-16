type Props = {
  toolName: string;
  roadmap: any[];
};

export function ToolRoadmapDashboard({ toolName, roadmap }: Props) {
  return (
    <div>
      <h1>{toolName} Roadmap</h1>

      {roadmap.map((step, index) => (
        <div key={index}>
          <h3>{step.skill}</h3>
          <p>{step.difficulty}</p>
          <p>{step.duration}</p>
        </div>
      ))}
    </div>
  );
}
