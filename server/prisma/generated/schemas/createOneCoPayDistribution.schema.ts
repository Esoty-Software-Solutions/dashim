import { z } from 'zod';
import { CoPayDistributionCreateInputObjectSchema } from './objects/CoPayDistributionCreateInput.schema';
import { CoPayDistributionUncheckedCreateInputObjectSchema } from './objects/CoPayDistributionUncheckedCreateInput.schema';

export const CoPayDistributionCreateOneSchema = z.object({
  data: z.union([
    CoPayDistributionCreateInputObjectSchema,
    CoPayDistributionUncheckedCreateInputObjectSchema,
  ]),
});
