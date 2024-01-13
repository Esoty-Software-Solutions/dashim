import { z } from 'zod';
import { PatientServiceUpdateInputObjectSchema } from './objects/PatientServiceUpdateInput.schema';
import { PatientServiceUncheckedUpdateInputObjectSchema } from './objects/PatientServiceUncheckedUpdateInput.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';

export const PatientServiceUpdateOneSchema = z.object({
  data: z.union([
    PatientServiceUpdateInputObjectSchema,
    PatientServiceUncheckedUpdateInputObjectSchema,
  ]),
  where: PatientServiceWhereUniqueInputObjectSchema,
});
