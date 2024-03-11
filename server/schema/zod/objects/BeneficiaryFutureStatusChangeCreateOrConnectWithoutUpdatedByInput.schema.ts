/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInput>;
export const BeneficiaryFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
