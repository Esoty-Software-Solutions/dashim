/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusUpdatesInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
