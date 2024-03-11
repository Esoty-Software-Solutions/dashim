/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceScalarWhereInputObjectSchema } from './BeneficiaryServiceScalarWhereInput.schema';
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from './BeneficiaryServiceUpdateManyMutationInput.schema';
import { BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInput>;
export const BeneficiaryServiceUpdateManyWithWhereWithoutCreatedByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryServiceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryServiceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryServiceUncheckedUpdateManyWithoutCreatedByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
