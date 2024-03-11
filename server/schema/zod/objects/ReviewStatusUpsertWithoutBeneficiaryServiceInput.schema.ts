/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpsertWithoutBeneficiaryServiceInput>;
export const ReviewStatusUpsertWithoutBeneficiaryServiceInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutBeneficiaryServiceInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutBeneficiaryServiceInputObjectSchema),
        ]),
        where: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
