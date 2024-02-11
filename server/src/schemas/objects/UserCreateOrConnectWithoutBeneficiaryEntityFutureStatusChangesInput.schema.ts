import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema =
  Schema;
