import { z } from 'zod';
import { PackageMedicalServicesOrderByWithRelationInputObjectSchema } from './objects/PackageMedicalServicesOrderByWithRelationInput.schema';
import { PackageMedicalServicesWhereInputObjectSchema } from './objects/PackageMedicalServicesWhereInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesScalarFieldEnumSchema } from './enums/PackageMedicalServicesScalarFieldEnum.schema';

export const PackageMedicalServicesFindFirstSchema = z.object({
  orderBy: z
    .union([
      PackageMedicalServicesOrderByWithRelationInputObjectSchema,
      PackageMedicalServicesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PackageMedicalServicesWhereInputObjectSchema.optional(),
  cursor: PackageMedicalServicesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PackageMedicalServicesScalarFieldEnumSchema).optional(),
});
