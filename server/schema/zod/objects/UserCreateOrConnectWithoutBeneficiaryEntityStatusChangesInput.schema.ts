/* eslint-disable */
import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInput>;
export const UserCreateOrConnectWithoutBeneficiaryEntityStatusChangesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
