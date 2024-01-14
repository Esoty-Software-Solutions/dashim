import { z } from 'zod';
import { CoPayDistributionCreateManyInputObjectSchema } from './objects/CoPayDistributionCreateManyInput.schema';

export const CoPayDistributionCreateManySchema = z.object({
  data: z.union([
    CoPayDistributionCreateManyInputObjectSchema,
    z.array(CoPayDistributionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
