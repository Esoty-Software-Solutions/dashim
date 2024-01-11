import { z } from 'zod';
import { PatientServiceOrderByWithRelationInputObjectSchema } from './objects/PatientServiceOrderByWithRelationInput.schema';
import { PatientServiceWhereInputObjectSchema } from './objects/PatientServiceWhereInput.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';
import { PatientServiceCountAggregateInputObjectSchema } from './objects/PatientServiceCountAggregateInput.schema';
import { PatientServiceMinAggregateInputObjectSchema } from './objects/PatientServiceMinAggregateInput.schema';
import { PatientServiceMaxAggregateInputObjectSchema } from './objects/PatientServiceMaxAggregateInput.schema';
import { PatientServiceAvgAggregateInputObjectSchema } from './objects/PatientServiceAvgAggregateInput.schema';
import { PatientServiceSumAggregateInputObjectSchema } from './objects/PatientServiceSumAggregateInput.schema';

export const PatientServiceAggregateSchema = z.object({
  orderBy: z
    .union([
      PatientServiceOrderByWithRelationInputObjectSchema,
      PatientServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PatientServiceWhereInputObjectSchema.optional(),
  cursor: PatientServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PatientServiceCountAggregateInputObjectSchema])
    .optional(),
  _min: PatientServiceMinAggregateInputObjectSchema.optional(),
  _max: PatientServiceMaxAggregateInputObjectSchema.optional(),
  _avg: PatientServiceAvgAggregateInputObjectSchema.optional(),
  _sum: PatientServiceSumAggregateInputObjectSchema.optional(),
});
