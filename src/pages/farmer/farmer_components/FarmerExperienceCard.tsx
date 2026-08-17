import { greenResume } from "../farmer_data/farmer_mockData";

export default function ExperienceCard() {
  const progress =
    (greenResume.experiencePoints /
      greenResume.nextLevelThreshold) *
    100;

  const remaining =
    greenResume.nextLevelThreshold -
    greenResume.experiencePoints;

  return (
    <section className="experience-card">
      <div className="experience-header">
        <div>
          <span className="card-label">
            綠色行動經驗值
          </span>

          <div className="experience-number">
            {greenResume.experiencePoints}

            <span>經驗值</span>
          </div>

          <div className="level-badge">
            {greenResume.level}　
            {greenResume.levelName}
          </div>
        </div>

        <div className="next-level">
          <span>下一級</span>

          <strong>
            {greenResume.nextLevel}{" "}
            {greenResume.nextLevelName}
          </strong>

          <small>
            需要 {greenResume.nextLevelThreshold} 經驗值
          </small>
        </div>
      </div>

      <div className="progress-wrapper">
        <div className="progress-label">
          <span>目前進度</span>

          <span>
            {greenResume.experiencePoints} /{" "}
            {greenResume.nextLevelThreshold}
          </span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-value"
            style={{
              width: `${Math.min(progress, 100)}%`,
            }}
          />
        </div>

        <div className="progress-note">
          還需要 {remaining} 經驗值即可進入下一等級
        </div>
      </div>

      <div className="experience-dimensions">
        {greenResume.dimensions.map(
          (dimension) => (
            <div key={dimension.id}>
              <span>{dimension.name}</span>

              <strong>
                {dimension.points} /{" "}
                {dimension.maxPoints}
              </strong>
            </div>
          )
        )}
      </div>
    </section>
  );
}