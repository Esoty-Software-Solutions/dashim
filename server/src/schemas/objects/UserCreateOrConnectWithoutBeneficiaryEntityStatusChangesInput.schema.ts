import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema =
  Schema;
