import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryEntityFutureStatusUpdatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutBeneficiaryEntityFutureStatusUpdatesNestedInputObjectSchema =
  Schema;
