import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryFutureStatusUpdatesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema =
  Schema;
