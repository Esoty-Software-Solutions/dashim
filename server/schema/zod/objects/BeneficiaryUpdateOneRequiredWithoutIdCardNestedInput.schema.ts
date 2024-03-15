/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';
import { BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutIdCardInput.schema';
import { BeneficiaryUpsertWithoutIdCardInputObjectSchema } from './BeneficiaryUpsertWithoutIdCardInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateToOneWithWhereWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateToOneWithWhereWithoutIdCardInput.schema';
import { BeneficiaryUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUpdateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutIdCardNestedInput>;
export const BeneficiaryUpdateOneRequiredWithoutIdCardNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryUpsertWithoutIdCardInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateToOneWithWhereWithoutIdCardInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithoutIdCardInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedUpdateWithoutIdCardInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
