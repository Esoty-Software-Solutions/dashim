/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUpdateWithoutFaceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutFaceInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutFaceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFaceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
