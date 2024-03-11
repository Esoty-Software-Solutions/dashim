/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutBeneficiaryBalancesInput>;
export const BeneficiaryUpsertWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
