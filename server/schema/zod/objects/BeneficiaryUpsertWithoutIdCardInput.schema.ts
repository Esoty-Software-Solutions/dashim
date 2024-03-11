/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutIdCardInput.schema';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutIdCardInput>;
export const BeneficiaryUpsertWithoutIdCardInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutIdCardInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
