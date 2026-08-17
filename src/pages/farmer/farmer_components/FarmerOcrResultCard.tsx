type Props = {
  ocr: {
    status: string;
    confidence: number | null;
    fields: {
      name: string;
      value: string;
    }[];
  };
};

export default function OcrResultCard({
  ocr,
}: Props) {
  return (
    <section className="detail-card">
      <div className="section-heading">
        <div>
          <span className="card-label">
            OCR / DATA EXTRACTION
          </span>

          <h2>
            資料擷取結果
          </h2>
        </div>

        {ocr.confidence !== null && (
          <div className="ocr-confidence">
            <span>
              OCR 信心
            </span>

            <strong>
              {ocr.confidence}%
            </strong>
          </div>
        )}
      </div>

      <div className="ocr-status">
        {ocr.status === "completed"
          ? "✓ OCR 擷取完成"
          : "— 此資料不需要 OCR"}
      </div>

      <div className="ocr-fields">
        {ocr.fields.map(
          (field) => (
            <div
              className="ocr-field"
              key={field.name}
            >
              <span>
                {field.name}
              </span>

              <strong>
                {field.value}
              </strong>
            </div>
          )
        )}
      </div>

      <div className="ocr-notice">
        Demo 中此區域模擬 OCR 擷取結果。
        正式系統應保留原始文件、擷取結果及人工修正紀錄。
      </div>
    </section>
  );
}