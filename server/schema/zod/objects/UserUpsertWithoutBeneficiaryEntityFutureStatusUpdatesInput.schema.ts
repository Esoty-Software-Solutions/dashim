/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInput>;
export const UserUpsertWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
