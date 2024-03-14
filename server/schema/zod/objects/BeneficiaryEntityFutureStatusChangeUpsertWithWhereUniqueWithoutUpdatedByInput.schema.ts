/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const BeneficiaryEntityFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedUpdateWithoutUpdatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
