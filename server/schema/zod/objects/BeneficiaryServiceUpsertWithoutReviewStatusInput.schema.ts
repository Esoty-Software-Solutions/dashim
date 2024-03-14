/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpsertWithoutReviewStatusInput>;
export const BeneficiaryServiceUpsertWithoutReviewStatusInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryServiceUpdateWithoutReviewStatusInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateWithoutReviewStatusInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryServiceWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
