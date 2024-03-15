/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUpdateWithoutGenderInput.schema';
import { BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutGenderInput.schema';
import { BeneficiaryCreateWithoutGenderInputObjectSchema } from './BeneficiaryCreateWithoutGenderInput.schema';
import { BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutGenderInput>;
export const BeneficiaryUpsertWithWhereUniqueWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutGenderInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutGenderInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
