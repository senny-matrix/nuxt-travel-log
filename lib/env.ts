import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>; // Type of the env variable in your application

tryParseEnv(EnvSchema);
// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
