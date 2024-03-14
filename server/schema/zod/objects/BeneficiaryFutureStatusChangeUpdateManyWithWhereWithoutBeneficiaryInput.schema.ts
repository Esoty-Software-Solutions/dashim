/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema } from './BeneficiaryFutureStatusChangeScalarWhereInput.schema';
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInput>;
export const BeneficiaryFutureStatusChangeUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
