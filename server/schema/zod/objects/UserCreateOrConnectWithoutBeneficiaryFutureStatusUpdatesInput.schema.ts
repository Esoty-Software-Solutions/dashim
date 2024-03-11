/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInput>;
export const UserCreateOrConnectWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
