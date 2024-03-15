/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutFutureStatusInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
