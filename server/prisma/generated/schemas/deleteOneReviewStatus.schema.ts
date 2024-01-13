import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';

export const ReviewStatusDeleteOneSchema = z.object({
  where: ReviewStatusWhereUniqueInputObjectSchema,
});
