type SourceLevelProps = {
  level: string;
};

export default function SourceLevel({
  level,
}: SourceLevelProps) {
  return (
    <div
      className={`source-level source-${level.toLowerCase()}`}
    >
      <strong>{level}</strong>

      <span>
        資料來源等級
      </span>
    </div>
  );
}