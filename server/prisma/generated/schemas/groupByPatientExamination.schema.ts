import { z } from 'zod';
import { PatientExaminationWhereInputObjectSchema } from './objects/PatientExaminationWhereInput.schema';
import { PatientExaminationOrderByWithAggregationInputObjectSchema } from './objects/PatientExaminationOrderByWithAggregationInput.schema';
import { PatientExaminationScalarWhereWithAggregatesInputObjectSchema } from './objects/PatientExaminationScalarWhereWithAggregatesInput.schema';
import { PatientExaminationScalarFieldEnumSchema } from './enums/PatientExaminationScalarFieldEnum.schema';

export const PatientExaminationGroupBySchema = z.object({
  where: PatientExaminationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PatientExaminationOrderByWithAggregationInputObjectSchema,
      PatientExaminationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    PatientExaminationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PatientExaminationScalarFieldEnumSchema),
});
