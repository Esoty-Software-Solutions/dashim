/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryServiceCreationsInput>;
export const UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
