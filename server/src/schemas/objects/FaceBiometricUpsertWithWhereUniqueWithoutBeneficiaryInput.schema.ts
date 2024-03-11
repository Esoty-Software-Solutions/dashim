import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
