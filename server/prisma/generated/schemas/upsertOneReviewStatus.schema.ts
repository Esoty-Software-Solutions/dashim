import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateInputObjectSchema } from './objects/ReviewStatusCreateInput.schema';
import { ReviewStatusUncheckedCreateInputObjectSchema } from './objects/ReviewStatusUncheckedCreateInput.schema';
import { ReviewStatusUpdateInputObjectSchema } from './objects/ReviewStatusUpdateInput.schema';
import { ReviewStatusUncheckedUpdateInputObjectSchema } from './objects/ReviewStatusUncheckedUpdateInput.schema';

export const ReviewStatusUpsertSchema = z.object({
  where: ReviewStatusWhereUniqueInputObjectSchema,
  create: z.union([
    ReviewStatusCreateInputObjectSchema,
    ReviewStatusUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReviewStatusUpdateInputObjectSchema,
    ReviewStatusUncheckedUpdateInputObjectSchema,
  ]),
});
