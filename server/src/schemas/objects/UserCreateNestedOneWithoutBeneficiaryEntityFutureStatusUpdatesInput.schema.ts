import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema =
  Schema;
