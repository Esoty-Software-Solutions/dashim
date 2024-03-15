/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutFingerprintInput>;
export const BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
