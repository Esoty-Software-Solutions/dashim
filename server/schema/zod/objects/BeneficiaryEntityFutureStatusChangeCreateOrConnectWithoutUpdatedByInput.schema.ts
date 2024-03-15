/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInput>;
export const BeneficiaryEntityFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
