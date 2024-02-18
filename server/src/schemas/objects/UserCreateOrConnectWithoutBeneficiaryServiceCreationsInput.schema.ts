import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryServiceCreationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema =
  Schema;
