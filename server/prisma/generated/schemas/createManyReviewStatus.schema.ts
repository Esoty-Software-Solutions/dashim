import { z } from 'zod';
import { ReviewStatusCreateManyInputObjectSchema } from './objects/ReviewStatusCreateManyInput.schema';

export const ReviewStatusCreateManySchema = z.object({
  data: z.union([
    ReviewStatusCreateManyInputObjectSchema,
    z.array(ReviewStatusCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
