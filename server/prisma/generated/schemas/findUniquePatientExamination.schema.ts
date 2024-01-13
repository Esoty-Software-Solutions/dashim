import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';

export const PatientExaminationFindUniqueSchema = z.object({
  where: PatientExaminationWhereUniqueInputObjectSchema,
});
