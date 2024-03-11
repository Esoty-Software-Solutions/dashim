import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema =
  Schema;
