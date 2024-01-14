import { z } from 'zod';
import { CoPayDistributionWhereInputObjectSchema } from './objects/CoPayDistributionWhereInput.schema';

export const CoPayDistributionDeleteManySchema = z.object({
  where: CoPayDistributionWhereInputObjectSchema.optional(),
});
