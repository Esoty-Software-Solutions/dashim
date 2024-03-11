/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryServiceCreationsInput>;
export const UserUpsertWithoutBeneficiaryServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
