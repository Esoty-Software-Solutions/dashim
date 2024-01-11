import { z } from 'zod';
import { PatientServiceCreateInputObjectSchema } from './objects/PatientServiceCreateInput.schema';
import { PatientServiceUncheckedCreateInputObjectSchema } from './objects/PatientServiceUncheckedCreateInput.schema';

export const PatientServiceCreateOneSchema = z.object({
  data: z.union([
    PatientServiceCreateInputObjectSchema,
    PatientServiceUncheckedCreateInputObjectSchema,
  ]),
});
