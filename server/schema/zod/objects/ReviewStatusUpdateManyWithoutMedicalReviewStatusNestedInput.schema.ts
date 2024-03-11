/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './ReviewStatusCreateManyMedicalReviewStatusInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithoutMedicalReviewStatusNestedInput>;
export const ReviewStatusUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema).array(),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema).optional(),
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
                z.lazy(() => ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema),
                z.lazy(() => ReviewStatusUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema).array(),
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
