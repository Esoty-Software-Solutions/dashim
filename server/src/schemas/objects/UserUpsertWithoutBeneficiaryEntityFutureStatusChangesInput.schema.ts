import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityFutureStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema =
  Schema;
