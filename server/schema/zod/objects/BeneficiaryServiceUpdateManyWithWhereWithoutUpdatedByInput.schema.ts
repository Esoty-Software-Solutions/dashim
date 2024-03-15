/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInput>;
export const BeneficiaryServiceUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateManyWithoutUpdatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
