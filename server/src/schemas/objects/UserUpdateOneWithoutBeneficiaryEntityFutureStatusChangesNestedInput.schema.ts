import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUpsertWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUpsertWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutBeneficiaryEntityFutureStatusChangesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutBeneficiaryEntityFutureStatusChangesNestedInputObjectSchema =
  Schema;
