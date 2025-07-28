import fs from "node:fs";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const file = url.searchParams.get("file");
  let content = "";

  if (file && fs.existsSync(file)) {
    content = await fs.promises.readFile(file, "utf-8");
  }

  return { payload: content };
});
