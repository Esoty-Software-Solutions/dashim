import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';

export const ReviewStatusFindUniqueSchema = z.object({
  where: ReviewStatusWhereUniqueInputObjectSchema,
});
