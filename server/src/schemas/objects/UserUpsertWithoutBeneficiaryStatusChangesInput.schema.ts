import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryStatusChangesInputObjectSchema =
  Schema;
