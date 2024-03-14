/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutBeneficiaryBalancesInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
