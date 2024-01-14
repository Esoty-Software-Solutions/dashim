import { z } from 'zod';
import { FaceBiometricUpdateInputObjectSchema } from './objects/FaceBiometricUpdateInput.schema';
import { FaceBiometricUncheckedUpdateInputObjectSchema } from './objects/FaceBiometricUncheckedUpdateInput.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';

export const FaceBiometricUpdateOneSchema = z.object({
  data: z.union([
    FaceBiometricUpdateInputObjectSchema,
    FaceBiometricUncheckedUpdateInputObjectSchema,
  ]),
  where: FaceBiometricWhereUniqueInputObjectSchema,
});
