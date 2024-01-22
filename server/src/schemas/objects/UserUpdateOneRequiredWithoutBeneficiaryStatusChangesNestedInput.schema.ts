import { z } from 'zod';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryStatusChangesInput.schema';
import { UserUpsertWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUpsertWithoutBeneficiaryStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBeneficiaryStatusChangesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutBeneficiaryStatusChangesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBeneficiaryStatusChangesNestedInputObjectSchema =
  Schema;
