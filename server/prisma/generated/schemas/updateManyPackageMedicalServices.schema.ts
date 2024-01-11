import { z } from 'zod';
import { PackageMedicalServicesUpdateManyMutationInputObjectSchema } from './objects/PackageMedicalServicesUpdateManyMutationInput.schema';
import { PackageMedicalServicesWhereInputObjectSchema } from './objects/PackageMedicalServicesWhereInput.schema';

export const PackageMedicalServicesUpdateManySchema = z.object({
  data: PackageMedicalServicesUpdateManyMutationInputObjectSchema,
  where: PackageMedicalServicesWhereInputObjectSchema.optional(),
});
