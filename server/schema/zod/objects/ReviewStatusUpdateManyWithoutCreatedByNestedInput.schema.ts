/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutCreatedByInput.schema';
import { ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutCreatedByInput.schema';
import { ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema } from './ReviewStatusCreateManyCreatedByInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ReviewStatusUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ReviewStatusUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithoutCreatedByNestedInput>;
export const ReviewStatusUpdateManyWithoutCreatedByNestedInputObjectSchema: SchemaType = z
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
        upsert: z
            .union([
                z.lazy(() => ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
                z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ReviewStatusUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
                z.lazy(() => ReviewStatusUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
                z.lazy(() => ReviewStatusScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
