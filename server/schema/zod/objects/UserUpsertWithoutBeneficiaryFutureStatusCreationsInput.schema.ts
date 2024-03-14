/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryFutureStatusCreationsInput>;
export const UserUpsertWithoutBeneficiaryFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
