/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInput>;
export const UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
