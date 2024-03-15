/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInput>;
export const BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
