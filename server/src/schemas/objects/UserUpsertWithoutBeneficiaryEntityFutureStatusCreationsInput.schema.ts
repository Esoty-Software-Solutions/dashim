import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema =
  Schema;
