/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput>;
export const BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateWithoutCreatedByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutCreatedByInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
