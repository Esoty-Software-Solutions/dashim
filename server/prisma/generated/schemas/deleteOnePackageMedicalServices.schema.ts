import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';

export const PackageMedicalServicesDeleteOneSchema = z.object({
  where: PackageMedicalServicesWhereUniqueInputObjectSchema,
});
