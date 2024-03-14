/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutUpdatedByInput>;
export const ReviewStatusUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateManyWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
