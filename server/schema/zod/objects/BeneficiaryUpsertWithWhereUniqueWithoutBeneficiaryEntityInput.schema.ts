/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateWithoutBeneficiaryEntityInput.schema';
import { BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInput>;
export const BeneficiaryUpsertWithWhereUniqueWithoutBeneficiaryEntityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutBeneficiaryEntityInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutBeneficiaryEntityInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutBeneficiaryEntityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
