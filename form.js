import { googleFormsToJson } from "react-google-forms-hooks";
import fs from "fs";

// can use both full and shortened form url
const result = await googleFormsToJson(
  "https://docs.google.com/forms/d/e/1FAIpQLSfTjsGv0JQASPvAoVfWmoyYZRTGSqA43NpD8xZI_DIgZYlwog/viewform"
);

// save result to file form.json
fs.writeFileSync("form.json", JSON.stringify(result));
