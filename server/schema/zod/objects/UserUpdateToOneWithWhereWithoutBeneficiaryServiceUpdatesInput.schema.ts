/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryServiceUpdatesInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
