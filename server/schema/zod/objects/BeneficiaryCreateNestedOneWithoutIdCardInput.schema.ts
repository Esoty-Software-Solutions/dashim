/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';
import { BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutIdCardInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutIdCardInput>;
export const BeneficiaryCreateNestedOneWithoutIdCardInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
