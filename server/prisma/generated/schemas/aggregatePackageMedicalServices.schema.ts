import { z } from 'zod';
import { PackageMedicalServicesOrderByWithRelationInputObjectSchema } from './objects/PackageMedicalServicesOrderByWithRelationInput.schema';
import { PackageMedicalServicesWhereInputObjectSchema } from './objects/PackageMedicalServicesWhereInput.schema';
import { PackageMedicalServicesWhereUniqueInputObjectSchema } from './objects/PackageMedicalServicesWhereUniqueInput.schema';
import { PackageMedicalServicesCountAggregateInputObjectSchema } from './objects/PackageMedicalServicesCountAggregateInput.schema';
import { PackageMedicalServicesMinAggregateInputObjectSchema } from './objects/PackageMedicalServicesMinAggregateInput.schema';
import { PackageMedicalServicesMaxAggregateInputObjectSchema } from './objects/PackageMedicalServicesMaxAggregateInput.schema';
import { PackageMedicalServicesAvgAggregateInputObjectSchema } from './objects/PackageMedicalServicesAvgAggregateInput.schema';
import { PackageMedicalServicesSumAggregateInputObjectSchema } from './objects/PackageMedicalServicesSumAggregateInput.schema';

export const PackageMedicalServicesAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      PackageMedicalServicesCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: PackageMedicalServicesMinAggregateInputObjectSchema.optional(),
  _max: PackageMedicalServicesMaxAggregateInputObjectSchema.optional(),
  _avg: PackageMedicalServicesAvgAggregateInputObjectSchema.optional(),
  _sum: PackageMedicalServicesSumAggregateInputObjectSchema.optional(),
});
