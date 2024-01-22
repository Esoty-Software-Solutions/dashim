import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryFutureStatusChangesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryFutureStatusChangesInputObjectSchema =
  Schema;
