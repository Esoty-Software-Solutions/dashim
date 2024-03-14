/* eslint-disable */
import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpdateWithWhereUniqueWithoutBeneficiaryInput>;
export const IDCardUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => IDCardUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
