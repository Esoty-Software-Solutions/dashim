/* eslint-disable */
import { z } from 'zod';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBeneficiaryEntityStatusChangesInput>;
export const UserUpdateToOneWithWhereWithoutBeneficiaryEntityStatusChangesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => UserWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBeneficiaryEntityStatusChangesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
