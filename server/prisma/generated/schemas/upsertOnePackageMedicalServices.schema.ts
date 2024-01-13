import { z } from 'zod';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCreateInputObjectSchema } from './objects/PackageMedicalServicesCreateInput.schema';
import { PackageMedicalServicesUncheckedCreateInputObjectSchema } from './objects/PackageMedicalServicesUncheckedCreateInput.schema';
import { PackageMedicalServicesUpdateInputObjectSchema } from './objects/PackageMedicalServicesUpdateInput.schema';
import { PackageMedicalServicesUncheckedUpdateInputObjectSchema } from './objects/PackageMedicalServicesUncheckedUpdateInput.schema';

export const PackageMedicalServicesUpsertSchema = z.object({
  where: PackageMedicalServicesWhereUniqueInputObjectSchema,
  create: z.union([
    PackageMedicalServicesCreateInputObjectSchema,
    PackageMedicalServicesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PackageMedicalServicesUpdateInputObjectSchema,
    PackageMedicalServicesUncheckedUpdateInputObjectSchema,
  ]),
});
