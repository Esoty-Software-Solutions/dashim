import { z } from 'zod';
import { ReviewStatusOrderByWithRelationInputObjectSchema } from './objects/ReviewStatusOrderByWithRelationInput.schema';
import { ReviewStatusWhereInputObjectSchema } from './objects/ReviewStatusWhereInput.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './objects/ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusScalarFieldEnumSchema } from './enums/ReviewStatusScalarFieldEnum.schema';

export const ReviewStatusFindFirstSchema = z.object({
  orderBy: z
    .union([
      ReviewStatusOrderByWithRelationInputObjectSchema,
      ReviewStatusOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewStatusWhereInputObjectSchema.optional(),
  cursor: ReviewStatusWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReviewStatusScalarFieldEnumSchema).optional(),
});
