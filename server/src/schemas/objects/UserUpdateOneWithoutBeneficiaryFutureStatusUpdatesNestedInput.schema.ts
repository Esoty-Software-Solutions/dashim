import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutBeneficiaryFutureStatusUpdatesNestedInputObjectSchema =
  Schema;
