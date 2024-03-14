/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput>;
export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
