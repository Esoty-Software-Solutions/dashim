import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';

export const PatientExaminationDeleteOneSchema = z.object({
  where: PatientExaminationWhereUniqueInputObjectSchema,
});
