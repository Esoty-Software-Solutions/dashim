import { z } from 'zod';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './objects/ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusWhereInputObjectSchema } from './objects/ReviewStatusWhereInput.schema';

export const ReviewStatusUpdateManySchema = z.object({
  data: ReviewStatusUpdateManyMutationInputObjectSchema,
  where: ReviewStatusWhereInputObjectSchema.optional(),
});
