/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput>;
export const BeneficiaryEntityFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema).array(),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema),
                z
                    .lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema)
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema),
                z
                    .lazy(() => BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema)
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema),
                z
                    .lazy(
                        () => BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema),
                z
                    .lazy(
                        () => BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema),
                z
                    .lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema)
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema),
                z.lazy(() => BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
