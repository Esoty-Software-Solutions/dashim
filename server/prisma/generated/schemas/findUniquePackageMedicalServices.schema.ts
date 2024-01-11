import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';

export const PackageMedicalServicesFindUniqueSchema = z.object({
  where: PackageMedicalServicesWhereUniqueInputObjectSchema,
});
