import { z } from 'zod';
import { FaceBiometricUpdateManyMutationInputObjectSchema } from './objects/FaceBiometricUpdateManyMutationInput.schema';
import { FaceBiometricWhereInputObjectSchema } from './objects/FaceBiometricWhereInput.schema';

export const FaceBiometricUpdateManySchema = z.object({
  data: FaceBiometricUpdateManyMutationInputObjectSchema,
  where: FaceBiometricWhereInputObjectSchema.optional(),
});
