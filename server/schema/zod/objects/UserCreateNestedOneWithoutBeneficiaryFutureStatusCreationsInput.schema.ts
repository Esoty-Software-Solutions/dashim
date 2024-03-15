/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInput>;
export const UserCreateNestedOneWithoutBeneficiaryFutureStatusCreationsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryFutureStatusCreationsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutBeneficiaryFutureStatusCreationsInputObjectSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
