import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './objects/FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCreateInputObjectSchema } from './objects/FaceBiometricCreateInput.schema';
import { FaceBiometricUncheckedCreateInputObjectSchema } from './objects/FaceBiometricUncheckedCreateInput.schema';
import { FaceBiometricUpdateInputObjectSchema } from './objects/FaceBiometricUpdateInput.schema';
import { FaceBiometricUncheckedUpdateInputObjectSchema } from './objects/FaceBiometricUncheckedUpdateInput.schema';

export const FaceBiometricUpsertSchema = z.object({
  where: FaceBiometricWhereUniqueInputObjectSchema,
  create: z.union([
    FaceBiometricCreateInputObjectSchema,
    FaceBiometricUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    FaceBiometricUpdateInputObjectSchema,
    FaceBiometricUncheckedUpdateInputObjectSchema,
  ]),
});
