import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './objects/ReviewStatusWhereInput.schema';

export const ReviewStatusDeleteManySchema = z.object({
  where: ReviewStatusWhereInputObjectSchema.optional(),
});
