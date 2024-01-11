import { z } from 'zod';
import { PatientExaminationOrderByWithRelationInputObjectSchema } from './objects/PatientExaminationOrderByWithRelationInput.schema';
import { PatientExaminationWhereInputObjectSchema } from './objects/PatientExaminationWhereInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCountAggregateInputObjectSchema } from './objects/PatientExaminationCountAggregateInput.schema';
import { PatientExaminationMinAggregateInputObjectSchema } from './objects/PatientExaminationMinAggregateInput.schema';
import { PatientExaminationMaxAggregateInputObjectSchema } from './objects/PatientExaminationMaxAggregateInput.schema';
import { PatientExaminationAvgAggregateInputObjectSchema } from './objects/PatientExaminationAvgAggregateInput.schema';
import { PatientExaminationSumAggregateInputObjectSchema } from './objects/PatientExaminationSumAggregateInput.schema';

export const PatientExaminationAggregateSchema = z.object({
  orderBy: z
    .union([
      PatientExaminationOrderByWithRelationInputObjectSchema,
      PatientExaminationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PatientExaminationWhereInputObjectSchema.optional(),
  cursor: PatientExaminationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), PatientExaminationCountAggregateInputObjectSchema])
    .optional(),
  _min: PatientExaminationMinAggregateInputObjectSchema.optional(),
  _max: PatientExaminationMaxAggregateInputObjectSchema.optional(),
  _avg: PatientExaminationAvgAggregateInputObjectSchema.optional(),
  _sum: PatientExaminationSumAggregateInputObjectSchema.optional(),
});
