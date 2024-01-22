import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInputObjectSchema =
  Schema;
