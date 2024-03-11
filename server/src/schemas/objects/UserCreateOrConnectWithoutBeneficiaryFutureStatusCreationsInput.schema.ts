import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema =
  Schema;
