import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryServiceUpdatesInputObjectSchema =
  Schema;
