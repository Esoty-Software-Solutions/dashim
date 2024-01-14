import { z } from 'zod';
import { FaceBiometricCreateManyInputObjectSchema } from './objects/FaceBiometricCreateManyInput.schema';

export const FaceBiometricCreateManySchema = z.object({
  data: z.union([
    FaceBiometricCreateManyInputObjectSchema,
    z.array(FaceBiometricCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
