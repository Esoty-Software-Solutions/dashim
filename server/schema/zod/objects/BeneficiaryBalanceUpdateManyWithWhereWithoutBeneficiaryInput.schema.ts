/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from './BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInput>;
export const BeneficiaryBalanceUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryBalanceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedUpdateManyWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
