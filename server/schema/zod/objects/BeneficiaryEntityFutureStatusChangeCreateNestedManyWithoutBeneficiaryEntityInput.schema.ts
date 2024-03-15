/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelope.schema';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInput>;
export const BeneficiaryEntityFutureStatusChangeCreateNestedManyWithoutBeneficiaryEntityInputObjectSchema: SchemaType =
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
            createMany: z
                .lazy(() => BeneficiaryEntityFutureStatusChangeCreateManyBeneficiaryEntityInputEnvelopeObjectSchema)
                .optional(),
            connect: z
                .union([
                    z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
                    z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict() as SchemaType;
