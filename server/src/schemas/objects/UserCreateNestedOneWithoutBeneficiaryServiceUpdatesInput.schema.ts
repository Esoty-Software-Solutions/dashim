import { z } from 'zod';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryServiceUpdatesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutBeneficiaryServiceUpdatesInputObjectSchema =
  Schema;
