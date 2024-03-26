import { z } from "zod";

export const updateUserValidation = z.object({
  name: z.string(),
});
