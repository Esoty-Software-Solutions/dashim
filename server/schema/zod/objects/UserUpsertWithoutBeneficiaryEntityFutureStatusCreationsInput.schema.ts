/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInput>;
export const UserUpsertWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
