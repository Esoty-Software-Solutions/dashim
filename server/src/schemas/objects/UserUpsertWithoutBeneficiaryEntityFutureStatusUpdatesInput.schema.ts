import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema =
  Schema;
