/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryScalarWhereInputObjectSchema } from './BeneficiaryScalarWhereInput.schema';
import { BeneficiaryUpdateManyMutationInputObjectSchema } from './BeneficiaryUpdateManyMutationInput.schema';
import { BeneficiaryUncheckedUpdateManyWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedUpdateManyWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInput>;
export const BeneficiaryUpdateManyWithWhereWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateManyWithoutBeneficiaryEntityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
