type IndicatorCardProps = {
  name: string;
  level: string;
  score: number;
  description: string;
};

export default function IndicatorCard({
  name,
  level,
  score,
  description,
}: IndicatorCardProps) {
  return (
    <div className="indicator-card">
      <span className="indicator-title">
        {name}
      </span>

      <div className="indicator-main">
        <strong>{level}</strong>

        <span>{score}</span>
      </div>

      <div className="mini-progress">
        <div
          style={{
            width: `${score}%`,
          }}
        />
      </div>

      <p>{description}</p>
    </div>
  );
}