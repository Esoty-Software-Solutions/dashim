/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInput>;
export const UserCreateOrConnectWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityFutureStatusUpdatesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
