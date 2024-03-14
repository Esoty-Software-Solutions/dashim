/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceScalarWhereInputObjectSchema } from './BeneficiaryBalanceScalarWhereInput.schema';
import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from './BeneficiaryBalanceUpdateManyMutationInput.schema';
import { BeneficiaryBalanceUncheckedUpdateManyWithoutBeneftiPackageInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateManyWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceUpdateManyWithWhereWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryBalanceUpdateManyMutationInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedUpdateManyWithoutBeneftiPackageInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
