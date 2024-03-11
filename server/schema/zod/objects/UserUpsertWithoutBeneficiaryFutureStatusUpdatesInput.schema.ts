/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryFutureStatusUpdatesInput>;
export const UserUpsertWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
