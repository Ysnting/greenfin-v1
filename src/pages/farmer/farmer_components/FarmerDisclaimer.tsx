import { greenResume } from "../farmer_data/farmer_mockData";

export default function Disclaimer() {
  return (
    <div className="disclaimer">
      <span className="disclaimer-icon">
        ⓘ
      </span>

      <div>
        <strong>重要提醒</strong>

        <p>
          {greenResume.disclaimer}
        </p>
      </div>
    </div>
  );
}