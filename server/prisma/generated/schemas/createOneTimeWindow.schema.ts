import { z } from 'zod';
import { TimeWindowCreateInputObjectSchema } from './objects/TimeWindowCreateInput.schema';
import { TimeWindowUncheckedCreateInputObjectSchema } from './objects/TimeWindowUncheckedCreateInput.schema';

export const TimeWindowCreateOneSchema = z.object({
  data: z.union([
    TimeWindowCreateInputObjectSchema,
    TimeWindowUncheckedCreateInputObjectSchema,
  ]),
});
