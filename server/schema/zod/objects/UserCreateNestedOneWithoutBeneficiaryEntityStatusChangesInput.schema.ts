/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInput>;
export const UserCreateNestedOneWithoutBeneficiaryEntityStatusChangesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema)
            .optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
