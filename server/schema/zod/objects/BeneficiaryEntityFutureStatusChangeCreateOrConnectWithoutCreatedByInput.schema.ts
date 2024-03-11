/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInput>;
export const BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
