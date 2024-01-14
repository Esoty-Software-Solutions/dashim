import { z } from 'zod';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';

export const CoPayDistributionFindUniqueSchema = z.object({
  where: CoPayDistributionWhereUniqueInputObjectSchema,
});
