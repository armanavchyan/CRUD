import { existsSync, mkdirSync } from "fs";

function createFolder() {
  const dir = "./uploads";
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}
export default createFolder();
