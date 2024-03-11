/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityScalarWhereInputObjectSchema } from './BeneficiaryEntityScalarWhereInput.schema';
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from './BeneficiaryEntityUpdateManyMutationInput.schema';
import { BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInput>;
export const BeneficiaryEntityUpdateManyWithWhereWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateManyWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
