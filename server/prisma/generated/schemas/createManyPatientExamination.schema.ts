import { z } from 'zod';
import { PatientExaminationCreateManyInputObjectSchema } from './objects/PatientExaminationCreateManyInput.schema';

export const PatientExaminationCreateManySchema = z.object({
  data: z.union([
    PatientExaminationCreateManyInputObjectSchema,
    z.array(PatientExaminationCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
