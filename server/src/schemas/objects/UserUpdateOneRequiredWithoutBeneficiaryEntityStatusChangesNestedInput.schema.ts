import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUpsertWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUpsertWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBeneficiaryEntityStatusChangesNestedInputObjectSchema =
  Schema;
