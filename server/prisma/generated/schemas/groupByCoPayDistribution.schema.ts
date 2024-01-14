import { z } from 'zod';
import { CoPayDistributionWhereInputObjectSchema } from './objects/CoPayDistributionWhereInput.schema';
import { CoPayDistributionOrderByWithAggregationInputObjectSchema } from './objects/CoPayDistributionOrderByWithAggregationInput.schema';
import { CoPayDistributionScalarWhereWithAggregatesInputObjectSchema } from './objects/CoPayDistributionScalarWhereWithAggregatesInput.schema';
import { CoPayDistributionScalarFieldEnumSchema } from './enums/CoPayDistributionScalarFieldEnum.schema';

export const CoPayDistributionGroupBySchema = z.object({
  where: CoPayDistributionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CoPayDistributionOrderByWithAggregationInputObjectSchema,
      CoPayDistributionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    CoPayDistributionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CoPayDistributionScalarFieldEnumSchema),
});
