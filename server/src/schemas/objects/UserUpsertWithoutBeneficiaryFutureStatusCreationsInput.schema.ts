import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryFutureStatusCreationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryFutureStatusCreationsInputObjectSchema =
  Schema;
