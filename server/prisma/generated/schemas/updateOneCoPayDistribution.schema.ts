import { z } from 'zod';
import { CoPayDistributionUpdateInputObjectSchema } from './objects/CoPayDistributionUpdateInput.schema';
import { CoPayDistributionUncheckedUpdateInputObjectSchema } from './objects/CoPayDistributionUncheckedUpdateInput.schema';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';

export const CoPayDistributionUpdateOneSchema = z.object({
  data: z.union([
    CoPayDistributionUpdateInputObjectSchema,
    CoPayDistributionUncheckedUpdateInputObjectSchema,
  ]),
  where: CoPayDistributionWhereUniqueInputObjectSchema,
});
