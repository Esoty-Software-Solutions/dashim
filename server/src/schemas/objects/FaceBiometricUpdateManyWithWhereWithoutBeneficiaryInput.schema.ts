import { z } from 'zod';
import { FaceBiometricScalarWhereInputObjectSchema } from './FaceBiometricScalarWhereInput.schema';
import { FaceBiometricUpdateManyMutationInputObjectSchema } from './FaceBiometricUpdateManyMutationInput.schema';
import { FaceBiometricUncheckedUpdateManyWithoutFaceInputObjectSchema } from './FaceBiometricUncheckedUpdateManyWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FaceBiometricScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FaceBiometricUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => FaceBiometricUncheckedUpdateManyWithoutFaceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema =
  Schema;
