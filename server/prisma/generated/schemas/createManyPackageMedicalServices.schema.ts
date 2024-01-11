import { z } from 'zod';
import { PackageMedicalServicesCreateManyInputObjectSchema } from './objects/PackageMedicalServicesCreateManyInput.schema';

export const PackageMedicalServicesCreateManySchema = z.object({
  data: z.union([
    PackageMedicalServicesCreateManyInputObjectSchema,
    z.array(PackageMedicalServicesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
