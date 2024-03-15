/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUpdateWithoutGenderInput.schema';
import { BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateWithWhereUniqueWithoutGenderInput>;
export const BeneficiaryUpdateWithWhereUniqueWithoutGenderInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutGenderInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutGenderInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
