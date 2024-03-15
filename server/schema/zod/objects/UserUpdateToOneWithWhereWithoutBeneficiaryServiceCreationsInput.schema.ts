/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryServiceCreationsInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryServiceCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
