/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUpdateWithoutFaceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFaceInput.schema';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutFaceInput>;
export const BeneficiaryUpsertWithoutFaceInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFaceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
