import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './objects/MedicalCenterWhereUniqueInput.schema';

export const MedicalCenterFindUniqueSchema = z.object({
  where: MedicalCenterWhereUniqueInputObjectSchema,
});