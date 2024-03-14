/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from './BeneficiaryBalanceWhereUniqueInput.schema';
import { BeneficiaryBalanceUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInput>;
export const BeneficiaryBalanceUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryBalanceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryBalanceUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryBalanceUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
