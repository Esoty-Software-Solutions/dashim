/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInput>;
export const BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutBeneficiaryBalancesInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryBalancesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutBeneficiaryBalancesInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
