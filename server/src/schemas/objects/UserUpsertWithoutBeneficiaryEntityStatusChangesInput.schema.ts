import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryEntityStatusChangesInputObjectSchema =
  Schema;
