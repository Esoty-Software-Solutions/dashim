/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutIdCardInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutIdCardInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutIdCardInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
