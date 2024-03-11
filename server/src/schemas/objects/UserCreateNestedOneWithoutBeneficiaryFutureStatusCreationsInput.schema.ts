import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInputObjectSchema =
  Schema;
