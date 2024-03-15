/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';
import { ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUpdateWithoutBeneficiaryServiceInput.schema';
import { ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateToOneWithWhereWithoutBeneficiaryServiceInput>;
export const ReviewStatusUpdateToOneWithWhereWithoutBeneficiaryServiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutBeneficiaryServiceInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutBeneficiaryServiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
