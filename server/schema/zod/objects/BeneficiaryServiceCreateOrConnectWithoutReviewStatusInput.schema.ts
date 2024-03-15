/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput>;
export const BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
