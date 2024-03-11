/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutCreatedByInput>;
export const ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
