import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUpsertWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUpsertWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryFutureStatusChangesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutBeneficiaryFutureStatusChangesNestedInputObjectSchema =
  Schema;
