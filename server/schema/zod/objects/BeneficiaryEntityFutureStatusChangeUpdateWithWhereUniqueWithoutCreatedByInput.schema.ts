/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInput>;
export const BeneficiaryEntityFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
