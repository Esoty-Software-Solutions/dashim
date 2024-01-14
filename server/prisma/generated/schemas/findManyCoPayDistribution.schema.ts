import { z } from 'zod';
import { CoPayDistributionOrderByWithRelationInputObjectSchema } from './objects/CoPayDistributionOrderByWithRelationInput.schema';
import { CoPayDistributionWhereInputObjectSchema } from './objects/CoPayDistributionWhereInput.schema';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';
import { CoPayDistributionScalarFieldEnumSchema } from './enums/CoPayDistributionScalarFieldEnum.schema';

export const CoPayDistributionFindManySchema = z.object({
  orderBy: z
    .union([
      CoPayDistributionOrderByWithRelationInputObjectSchema,
      CoPayDistributionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CoPayDistributionWhereInputObjectSchema.optional(),
  cursor: CoPayDistributionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CoPayDistributionScalarFieldEnumSchema).optional(),
});
