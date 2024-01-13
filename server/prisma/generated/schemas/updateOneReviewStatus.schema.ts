import { z } from 'zod';
import { ReviewStatusUpdateInputObjectSchema } from './objects/ReviewStatusUpdateInput.schema';
import { ReviewStatusUncheckedUpdateInputObjectSchema } from './objects/ReviewStatusUncheckedUpdateInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';

export const ReviewStatusUpdateOneSchema = z.object({
  data: z.union([
    ReviewStatusUpdateInputObjectSchema,
    ReviewStatusUncheckedUpdateInputObjectSchema,
  ]),
  where: ReviewStatusWhereUniqueInputObjectSchema,
});
