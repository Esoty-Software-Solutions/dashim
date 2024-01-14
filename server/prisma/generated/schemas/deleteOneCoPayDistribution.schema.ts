import { z } from 'zod';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';

export const CoPayDistributionDeleteOneSchema = z.object({
  where: CoPayDistributionWhereUniqueInputObjectSchema,
});
