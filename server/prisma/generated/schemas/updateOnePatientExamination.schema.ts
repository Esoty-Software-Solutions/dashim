import { z } from 'zod';
import { PatientExaminationUpdateInputObjectSchema } from './objects/PatientExaminationUpdateInput.schema';
import { PatientExaminationUncheckedUpdateInputObjectSchema } from './objects/PatientExaminationUncheckedUpdateInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';

export const PatientExaminationUpdateOneSchema = z.object({
  data: z.union([
    PatientExaminationUpdateInputObjectSchema,
    PatientExaminationUncheckedUpdateInputObjectSchema,
  ]),
  where: PatientExaminationWhereUniqueInputObjectSchema,
});
