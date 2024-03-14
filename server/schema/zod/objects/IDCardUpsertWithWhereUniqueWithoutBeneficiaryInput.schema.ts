/* eslint-disable */
import { z } from 'zod';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';
import { IDCardUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUpdateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedUpdateWithoutBeneficiaryInput.schema';
import { IDCardCreateWithoutBeneficiaryInputObjectSchema } from './IDCardCreateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUpsertWithWhereUniqueWithoutBeneficiaryInput>;
export const IDCardUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => IDCardWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => IDCardUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => IDCardUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
