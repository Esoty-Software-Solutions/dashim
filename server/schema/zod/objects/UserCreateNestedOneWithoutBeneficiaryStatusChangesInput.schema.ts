/* eslint-disable */
import { z } from 'zod';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutBeneficiaryStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateNestedOneWithoutBeneficiaryStatusChangesInput>;
export const UserCreateNestedOneWithoutBeneficiaryStatusChangesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
                z.lazy(() => UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
