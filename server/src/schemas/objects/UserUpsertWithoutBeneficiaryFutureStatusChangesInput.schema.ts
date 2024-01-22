import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryFutureStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryFutureStatusChangesInputObjectSchema =
  Schema;
