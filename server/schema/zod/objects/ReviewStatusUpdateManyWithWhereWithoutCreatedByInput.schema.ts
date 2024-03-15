/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutCreatedByInput>;
export const ReviewStatusUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateManyWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
