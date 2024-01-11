import { z } from 'zod';
import { PatientServiceWhereInputObjectSchema } from './objects/PatientServiceWhereInput.schema';
import { PatientServiceOrderByWithAggregationInputObjectSchema } from './objects/PatientServiceOrderByWithAggregationInput.schema';
import { PatientServiceScalarWhereWithAggregatesInputObjectSchema } from './objects/PatientServiceScalarWhereWithAggregatesInput.schema';
import { PatientServiceScalarFieldEnumSchema } from './enums/PatientServiceScalarFieldEnum.schema';

export const PatientServiceGroupBySchema = z.object({
  where: PatientServiceWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PatientServiceOrderByWithAggregationInputObjectSchema,
      PatientServiceOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PatientServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PatientServiceScalarFieldEnumSchema),
});
