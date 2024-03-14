/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUpdateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInput>;
export const ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
