import { z } from 'zod';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUpsertWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUpsertWithoutBeneficiaryServiceCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBeneficiaryServiceCreationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => UserUpsertWithoutBeneficiaryServiceCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutBeneficiaryServiceCreationsNestedInputObjectSchema =
  Schema;
