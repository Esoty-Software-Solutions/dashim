import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './objects/PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateInputObjectSchema } from './objects/PatientExaminationCreateInput.schema';
import { PatientExaminationUncheckedCreateInputObjectSchema } from './objects/PatientExaminationUncheckedCreateInput.schema';
import { PatientExaminationUpdateInputObjectSchema } from './objects/PatientExaminationUpdateInput.schema';
import { PatientExaminationUncheckedUpdateInputObjectSchema } from './objects/PatientExaminationUncheckedUpdateInput.schema';

export const PatientExaminationUpsertSchema = z.object({
  where: PatientExaminationWhereUniqueInputObjectSchema,
  create: z.union([
    PatientExaminationCreateInputObjectSchema,
    PatientExaminationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PatientExaminationUpdateInputObjectSchema,
    PatientExaminationUncheckedUpdateInputObjectSchema,
  ]),
});
