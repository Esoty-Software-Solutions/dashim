/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceUncheckedCreateWithoutReviewStatusInput.schema';
import { BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema } from './BeneficiaryServiceCreateOrConnectWithoutReviewStatusInput.schema';
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from './BeneficiaryServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInput>;
export const BeneficiaryServiceUncheckedCreateNestedOneWithoutReviewStatusInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryServiceCreateWithoutReviewStatusInputObjectSchema),
                z.lazy(() => BeneficiaryServiceUncheckedCreateWithoutReviewStatusInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryServiceCreateOrConnectWithoutReviewStatusInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryServiceWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
