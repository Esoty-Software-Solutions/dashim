/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryServiceCreationsInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryServiceCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryServiceCreationsInput>;
export const UserCreateNestedOneWithoutBeneficiaryServiceCreationsInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryServiceCreationsInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutBeneficiaryServiceCreationsInputObjectSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
