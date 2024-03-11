/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutCreatedByInput.schema';
import { ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutCreatedByInput.schema';
import { ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema } from './ReviewStatusCreateManyCreatedByInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUncheckedCreateNestedManyWithoutCreatedByInput>;
export const ReviewStatusUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusCreateWithoutCreatedByInputObjectSchema).array(),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
