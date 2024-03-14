/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';
import { BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateToOneWithWhereWithoutFutureStatusInput>;
export const BeneficiaryEntityUpdateToOneWithWhereWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
