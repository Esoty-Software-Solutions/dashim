import { z } from 'zod';
import { PackageMedicalServicesWhereInputObjectSchema } from './objects/PackageMedicalServicesWhereInput.schema';

export const PackageMedicalServicesDeleteManySchema = z.object({
  where: PackageMedicalServicesWhereInputObjectSchema.optional(),
});
