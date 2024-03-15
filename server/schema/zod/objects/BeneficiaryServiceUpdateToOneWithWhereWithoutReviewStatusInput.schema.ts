/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';
import { BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateToOneWithWhereWithoutReviewStatusInput>;
export const BeneficiaryServiceUpdateToOneWithWhereWithoutReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
