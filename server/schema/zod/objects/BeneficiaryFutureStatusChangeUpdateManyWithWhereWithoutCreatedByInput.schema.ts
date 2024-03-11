/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput>;
export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
