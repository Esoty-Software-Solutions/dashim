/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutUpdatedByInput.schema';
import { ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutUpdatedByInput.schema';
import { ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReviewStatusCreateManyUpdatedByInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateNestedManyWithoutUpdatedByInput>;
export const ReviewStatusCreateNestedManyWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema),
                z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema).array(),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema),
                z.lazy(() => ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
