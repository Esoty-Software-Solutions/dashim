import { z } from 'zod';
import { PatientExaminationWhereInputObjectSchema } from './objects/PatientExaminationWhereInput.schema';

export const PatientExaminationDeleteManySchema = z.object({
  where: PatientExaminationWhereInputObjectSchema.optional(),
});
