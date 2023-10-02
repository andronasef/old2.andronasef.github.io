import { useState } from "react";
import formData from "../../../../form.json";

const ContactForm = ({ lang }: { lang: string }) => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/formResponse";
  const fields = formData.fields.filter(
    (field: any) => field.type != undefined,
  );
  const isArabic = lang === "ar";

  const [completed, setCompleted] = useState(false);

  if (completed)
    return (
      <div className="text-base font-bold">Your Request Was Submitted!</div>
    );

  return (
    <form
      onSubmit={() => setCompleted(true)}
      action={formUrl}
      method="post"
      target="form"
      id="work-form"
      className="flex flex-col gap-2 md:max-w-xs form-group"
    >
      <iframe className="hidden" title="form" name="form" />
      {fields.map((field, index) => {
        const label = isArabic ? field.description : field.label;
        return (
          <div key={index} className="flex flex-col gap-2 form-group">
            <label>
              <span className="text-sm">{label}</span>
            </label>
            {index !== 4 ? (
              <input
                type="text"
                name={"entry." + field.id}
                id={field.label}
                required
                className="px-2 py-1"
              />
            ) : (
              <textarea
                className="p-2"
                id={field.label}
                rows={4}
                name={"entry." + field.id}
              />
            )}
          </div>
        );
      })}
        <button className="p-2 mt-2 self-start" type="submit">
          {isArabic ? "هيا نعمل سويا!" : "Let's Work Together!"}
        </button>
    </form>
  );
};

export default ContactForm;
