/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';
import { BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFingerprintInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutFingerprintInput>;
export const BeneficiaryCreateNestedOneWithoutFingerprintInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
