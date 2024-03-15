/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusUpdatesInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
