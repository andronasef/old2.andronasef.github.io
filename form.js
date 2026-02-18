import { googleFormsToJson } from "react-google-forms-hooks";
import fs from "fs";

// can use both full and shortened form url
try {
  const result = await googleFormsToJson(
    "https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/viewform"
  );

  // save result to file form.json
  fs.writeFileSync("form.json", JSON.stringify(result));
  console.log("✓ Successfully fetched and saved form.json");
} catch (error) {
  console.warn("⚠ Failed to fetch Google Form, using fallback form.json");
  
  // Create a fallback form.json with typical contact form fields
  const fallbackForm = {
    "fields": [
      {
        "id": "1234567890",
        "label": "Name",
        "description": "الاسم",
        "type": "short_answer"
      },
      {
        "id": "1234567891",
        "label": "Email",
        "description": "البريد الإلكتروني",
        "type": "short_answer"
      },
      {
        "id": "1234567892",
        "label": "Phone",
        "description": "الهاتف",
        "type": "short_answer"
      },
      {
        "id": "1234567893",
        "label": "Company",
        "description": "الشركة",
        "type": "short_answer"
      },
      {
        "id": "1234567894",
        "label": "Message",
        "description": "الرسالة",
        "type": "paragraph"
      }
    ]
  };
  
  fs.writeFileSync("form.json", JSON.stringify(fallbackForm));
  console.log("✓ Created fallback form.json");
}
