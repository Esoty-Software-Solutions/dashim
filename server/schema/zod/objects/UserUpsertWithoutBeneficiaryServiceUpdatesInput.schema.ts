/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryServiceUpdatesInput>;
export const UserUpsertWithoutBeneficiaryServiceUpdatesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryServiceUpdatesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
