/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateOrConnectWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema } from './BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelope.schema';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInput>;
export const BeneficiaryFutureStatusChangeCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
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
        createMany: z
            .lazy(() => BeneficiaryFutureStatusChangeCreateManyBeneficiaryInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
                z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
