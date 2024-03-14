/* eslint-disable */
import { z } from 'zod';
import { UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpsertWithoutBeneficiaryEntityStatusChangesInput>;
export const UserUpsertWithoutBeneficiaryEntityStatusChangesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedCreateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
        ]),
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
