import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusChangesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusChangesInputObjectSchema =
  Schema;
