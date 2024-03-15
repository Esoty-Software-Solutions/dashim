/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutStatusSetByInput>;
export const BeneficiaryUpdateManyWithWhereWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateManyWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
