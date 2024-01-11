import { z } from 'zod';
import { PackageMedicalServicesWhereInputObjectSchema } from './objects/PackageMedicalServicesWhereInput.schema';
import { PackageMedicalServicesOrderByWithAggregationInputObjectSchema } from './objects/PackageMedicalServicesOrderByWithAggregationInput.schema';
import { PackageMedicalServicesScalarWhereWithAggregatesInputObjectSchema } from './objects/PackageMedicalServicesScalarWhereWithAggregatesInput.schema';
import { PackageMedicalServicesScalarFieldEnumSchema } from './enums/PackageMedicalServicesScalarFieldEnum.schema';

export const PackageMedicalServicesGroupBySchema = z.object({
  where: PackageMedicalServicesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PackageMedicalServicesOrderByWithAggregationInputObjectSchema,
      PackageMedicalServicesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    PackageMedicalServicesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PackageMedicalServicesScalarFieldEnumSchema),
});
