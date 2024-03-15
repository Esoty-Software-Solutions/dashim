/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryStatusChangesInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryStatusChangesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryStatusChangesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
