import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateInputObjectSchema } from './objects/PatientServiceCreateInput.schema';
import { PatientServiceUncheckedCreateInputObjectSchema } from './objects/PatientServiceUncheckedCreateInput.schema';
import { PatientServiceUpdateInputObjectSchema } from './objects/PatientServiceUpdateInput.schema';
import { PatientServiceUncheckedUpdateInputObjectSchema } from './objects/PatientServiceUncheckedUpdateInput.schema';

export const PatientServiceUpsertSchema = z.object({
  where: PatientServiceWhereUniqueInputObjectSchema,
  create: z.union([
    PatientServiceCreateInputObjectSchema,
    PatientServiceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PatientServiceUpdateInputObjectSchema,
    PatientServiceUncheckedUpdateInputObjectSchema,
  ]),
});
