import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';

export const FaceBiometricFindUniqueSchema = z.object({
  where: FaceBiometricWhereUniqueInputObjectSchema,
});
