import { z } from 'zod';
import { CoPayDistributionWhereUniqueInputObjectSchema } from './objects/CoPayDistributionWhereUniqueInput.schema';
import { CoPayDistributionCreateInputObjectSchema } from './objects/CoPayDistributionCreateInput.schema';
import { CoPayDistributionUncheckedCreateInputObjectSchema } from './objects/CoPayDistributionUncheckedCreateInput.schema';
import { CoPayDistributionUpdateInputObjectSchema } from './objects/CoPayDistributionUpdateInput.schema';
import { CoPayDistributionUncheckedUpdateInputObjectSchema } from './objects/CoPayDistributionUncheckedUpdateInput.schema';

export const CoPayDistributionUpsertSchema = z.object({
  where: CoPayDistributionWhereUniqueInputObjectSchema,
  create: z.union([
    CoPayDistributionCreateInputObjectSchema,
    CoPayDistributionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CoPayDistributionUpdateInputObjectSchema,
    CoPayDistributionUncheckedUpdateInputObjectSchema,
  ]),
});
