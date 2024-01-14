import { z } from 'zod';
import { CoPayDistributionUpdateManyMutationInputObjectSchema } from './objects/CoPayDistributionUpdateManyMutationInput.schema';
import { CoPayDistributionWhereInputObjectSchema } from './objects/CoPayDistributionWhereInput.schema';

export const CoPayDistributionUpdateManySchema = z.object({
  data: CoPayDistributionUpdateManyMutationInputObjectSchema,
  where: CoPayDistributionWhereInputObjectSchema.optional(),
});
