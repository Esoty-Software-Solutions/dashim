import { z } from 'zod';
import { PatientExaminationCreateInputObjectSchema } from './objects/PatientExaminationCreateInput.schema';
import { PatientExaminationUncheckedCreateInputObjectSchema } from './objects/PatientExaminationUncheckedCreateInput.schema';

export const PatientExaminationCreateOneSchema = z.object({
  data: z.union([
    PatientExaminationCreateInputObjectSchema,
    PatientExaminationUncheckedCreateInputObjectSchema,
  ]),
});
