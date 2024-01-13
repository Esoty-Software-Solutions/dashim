import { z } from 'zod';
import { PackageMedicalServicesUpdateInputObjectSchema } from './objects/PackageMedicalServicesUpdateInput.schema';
import { PackageMedicalServicesUncheckedUpdateInputObjectSchema } from './objects/PackageMedicalServicesUncheckedUpdateInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';

export const PackageMedicalServicesUpdateOneSchema = z.object({
  data: z.union([
    PackageMedicalServicesUpdateInputObjectSchema,
    PackageMedicalServicesUncheckedUpdateInputObjectSchema,
  ]),
  where: PackageMedicalServicesWhereUniqueInputObjectSchema,
});
