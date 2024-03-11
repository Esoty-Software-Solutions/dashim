import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUpsertWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUpsertWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBeneficiaryFutureStatusCreationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBeneficiaryFutureStatusCreationsNestedInputObjectSchema =
  Schema;
