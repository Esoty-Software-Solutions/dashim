import { z } from 'zod';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutBeneficiaryServiceUpdatesNestedInputObjectSchema =
  Schema;
