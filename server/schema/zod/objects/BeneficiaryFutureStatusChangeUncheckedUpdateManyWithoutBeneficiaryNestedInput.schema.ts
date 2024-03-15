/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryNestedInput>;
export const BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z
                    .lazy(() => BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema)
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema),
                z
                    .lazy(() => BeneficiaryFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema)
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema),
                z
                    .lazy(() => BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema)
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
