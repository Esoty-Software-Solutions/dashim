import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema =
  Schema;
