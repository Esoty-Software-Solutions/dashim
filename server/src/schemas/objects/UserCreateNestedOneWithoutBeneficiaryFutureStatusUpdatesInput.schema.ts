import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryFutureStatusUpdatesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema =
  Schema;
