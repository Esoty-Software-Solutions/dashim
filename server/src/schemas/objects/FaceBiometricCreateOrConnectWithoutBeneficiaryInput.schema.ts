import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
