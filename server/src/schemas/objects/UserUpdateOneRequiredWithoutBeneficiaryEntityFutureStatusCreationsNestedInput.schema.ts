import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBeneficiaryEntityFutureStatusCreationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBeneficiaryEntityFutureStatusCreationsNestedInputObjectSchema =
  Schema;
