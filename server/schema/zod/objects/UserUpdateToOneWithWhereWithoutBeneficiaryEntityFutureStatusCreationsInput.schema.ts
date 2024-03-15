/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusCreationsInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
