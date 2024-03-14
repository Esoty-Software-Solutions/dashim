/* eslint-disable */
import { z } from 'zod';
import { IDCardScalarWhereInputObjectSchema } from './IDCardScalarWhereInput.schema';
import { IDCardUpdateManyMutationInputObjectSchema } from './IDCardUpdateManyMutationInput.schema';
import { IDCardUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpdateManyWithWhereWithoutBeneficiaryInput>;
export const IDCardUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => IDCardScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => IDCardUpdateManyMutationInputObjectSchema),
            z.lazy(() => IDCardUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
