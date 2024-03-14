/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
