/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInput>;
export const BeneficiaryUpdateWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
