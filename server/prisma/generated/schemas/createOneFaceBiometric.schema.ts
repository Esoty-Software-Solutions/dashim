import { z } from 'zod';
import { FaceBiometricCreateInputObjectSchema } from './objects/FaceBiometricCreateInput.schema';
import { FaceBiometricUncheckedCreateInputObjectSchema } from './objects/FaceBiometricUncheckedCreateInput.schema';

export const FaceBiometricCreateOneSchema = z.object({
  data: z.union([
    FaceBiometricCreateInputObjectSchema,
    FaceBiometricUncheckedCreateInputObjectSchema,
  ]),
});
