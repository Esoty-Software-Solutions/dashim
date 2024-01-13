import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './objects/PatientServiceWhereUniqueInput.schema';

export const PatientServiceFindUniqueSchema = z.object({
  where: PatientServiceWhereUniqueInputObjectSchema,
});
