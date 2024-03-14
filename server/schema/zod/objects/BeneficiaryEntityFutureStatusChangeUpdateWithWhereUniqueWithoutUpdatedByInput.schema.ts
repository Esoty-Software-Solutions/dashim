/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
