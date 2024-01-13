import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';

export const PatientServiceDeleteOneSchema = z.object({
  where: PatientServiceWhereUniqueInputObjectSchema,
});
