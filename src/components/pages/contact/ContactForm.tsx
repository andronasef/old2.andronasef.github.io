import { useState } from "react";
import formData from "../../../../form.json";

const ContactForm = () => {
  const [completed, setCompleted] = useState(false);
  let fields = formData.fields.filter((field: any) => field.type != undefined);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/formResponse";

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
      className="flex flex-col gap-2 md:max-w-xs"
    >
      <iframe className="hidden visibility:" title="form" name="form" />
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label>
            <span className="text-sm">{field.label}</span>
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
      ))}
      <div className="flex col-span-2">
        <button className="p-2 mt-2" type="submit">
          Let's Do It!
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
