import { z } from 'zod';
import { PatientServiceCreateManyInputObjectSchema } from './objects/PatientServiceCreateManyInput.schema';

export const PatientServiceCreateManySchema = z.object({
  data: z.union([
    PatientServiceCreateManyInputObjectSchema,
    z.array(PatientServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
