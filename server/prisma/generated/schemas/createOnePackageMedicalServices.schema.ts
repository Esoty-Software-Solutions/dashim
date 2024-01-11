import { z } from 'zod';
import { PackageMedicalServicesCreateInputObjectSchema } from './objects/PackageMedicalServicesCreateInput.schema';
import { PackageMedicalServicesUncheckedCreateInputObjectSchema } from './objects/PackageMedicalServicesUncheckedCreateInput.schema';

export const PackageMedicalServicesCreateOneSchema = z.object({
  data: z.union([
    PackageMedicalServicesCreateInputObjectSchema,
    PackageMedicalServicesUncheckedCreateInputObjectSchema,
  ]),
});
