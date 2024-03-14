/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryStatusChangesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryStatusChangesInput>;
export const UserUpsertWithoutBeneficiaryStatusChangesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryStatusChangesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
