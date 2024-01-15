import { z } from 'zod';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => FaceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () => FaceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
