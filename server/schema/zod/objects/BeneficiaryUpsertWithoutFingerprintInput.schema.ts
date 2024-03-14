/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFingerprintInput.schema';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutFingerprintInput>;
export const BeneficiaryUpsertWithoutFingerprintInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFingerprintInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
