import { toConfig, runExtension } from "roam-client";
import { createConfigObserver } from "roamjs-components";

export const ID = "roamjs-foobar";
const CONFIG = toConfig(ID);
runExtension(ID, () => {
  createConfigObserver({ title: CONFIG, config: { tabs: [] } });
});
