/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusCreationsInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
