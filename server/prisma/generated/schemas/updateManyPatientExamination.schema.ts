import { z } from 'zod';
import { PatientExaminationUpdateManyMutationInputObjectSchema } from './objects/PatientExaminationUpdateManyMutationInput.schema';
import { PatientExaminationWhereInputObjectSchema } from './objects/PatientExaminationWhereInput.schema';

export const PatientExaminationUpdateManySchema = z.object({
  data: PatientExaminationUpdateManyMutationInputObjectSchema,
  where: PatientExaminationWhereInputObjectSchema.optional(),
});
