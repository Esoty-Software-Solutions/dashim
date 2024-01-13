import { z } from 'zod';
import { TimeWindowCreateManyInputObjectSchema } from './objects/TimeWindowCreateManyInput.schema';

export const TimeWindowCreateManySchema = z.object({
  data: z.union([
    TimeWindowCreateManyInputObjectSchema,
    z.array(TimeWindowCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
