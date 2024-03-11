/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryStatusChangesInput>;
export const UserCreateOrConnectWithoutBeneficiaryStatusChangesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
