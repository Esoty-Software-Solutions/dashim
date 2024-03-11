/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
