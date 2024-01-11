import { z } from 'zod';
import { PatientServiceUpdateManyMutationInputObjectSchema } from './objects/PatientServiceUpdateManyMutationInput.schema';
import { PatientServiceWhereInputObjectSchema } from './objects/PatientServiceWhereInput.schema';

export const PatientServiceUpdateManySchema = z.object({
  data: PatientServiceUpdateManyMutationInputObjectSchema,
  where: PatientServiceWhereInputObjectSchema.optional(),
});
