import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryServiceUpdatesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema =
  Schema;
