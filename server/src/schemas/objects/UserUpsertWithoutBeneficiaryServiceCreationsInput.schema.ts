import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutBeneficiaryServiceCreationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema,
        ),
      ]),
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

export const UserUpsertWithoutBeneficiaryServiceCreationsInputObjectSchema =
  Schema;
