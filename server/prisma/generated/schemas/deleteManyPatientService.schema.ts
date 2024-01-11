import { z } from 'zod';
import { PatientServiceWhereInputObjectSchema } from './objects/PatientServiceWhereInput.schema';

export const PatientServiceDeleteManySchema = z.object({
  where: PatientServiceWhereInputObjectSchema.optional(),
});
