/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutFingerprintInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutFingerprintInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFingerprintInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
