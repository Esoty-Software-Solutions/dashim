/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUpdateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutCreatedByInput.schema';
import { ReviewStatusCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInput>;
export const ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
