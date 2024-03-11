/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput>;
export const BeneficiaryEntityFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityFutureStatusChangeScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryEntityFutureStatusChangeUncheckedUpdateManyWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
