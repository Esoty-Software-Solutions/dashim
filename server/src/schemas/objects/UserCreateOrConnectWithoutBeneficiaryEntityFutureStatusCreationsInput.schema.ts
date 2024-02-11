import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema =
  Schema;
