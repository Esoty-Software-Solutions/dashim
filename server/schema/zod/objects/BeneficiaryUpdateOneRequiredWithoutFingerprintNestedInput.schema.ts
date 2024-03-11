/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFingerprintInput.schema';
import { BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFingerprintInput.schema';
import { BeneficiaryUpsertWithoutFingerprintInputObjectSchema } from './BeneficiaryUpsertWithoutFingerprintInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateToOneWithWhereWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateToOneWithWhereWithoutFingerprintInput.schema';
import { BeneficiaryUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUpdateWithoutFingerprintInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutFingerprintNestedInput>;
export const BeneficiaryUpdateOneRequiredWithoutFingerprintNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutFingerprintInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutFingerprintInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutFingerprintInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryUpsertWithoutFingerprintInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateToOneWithWhereWithoutFingerprintInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithoutFingerprintInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedUpdateWithoutFingerprintInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
