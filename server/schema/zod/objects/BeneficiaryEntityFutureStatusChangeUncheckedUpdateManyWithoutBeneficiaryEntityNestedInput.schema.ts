/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityNestedInput>;
export const BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryEntityNestedInputObjectSchema: SchemaType =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema),
                    z
                        .lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema)
                        .array(),
                    z.lazy(
                        () =>
                            BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema)
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
                    z.lazy(
                        () =>
                            BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema,
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema,
                    ),
                    z
                        .lazy(
                            () =>
                                BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema,
                        )
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
