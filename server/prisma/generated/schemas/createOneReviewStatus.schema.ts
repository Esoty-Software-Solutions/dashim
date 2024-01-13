import { z } from 'zod';
import { ReviewStatusCreateInputObjectSchema } from './objects/ReviewStatusCreateInput.schema';
import { ReviewStatusUncheckedCreateInputObjectSchema } from './objects/ReviewStatusUncheckedCreateInput.schema';

export const ReviewStatusCreateOneSchema = z.object({
  data: z.union([
    ReviewStatusCreateInputObjectSchema,
    ReviewStatusUncheckedCreateInputObjectSchema,
  ]),
});
