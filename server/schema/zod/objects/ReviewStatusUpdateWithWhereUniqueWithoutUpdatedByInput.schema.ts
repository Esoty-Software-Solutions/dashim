/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
