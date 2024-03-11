/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutIdCardInputObjectSchema } from './BeneficiaryCreateWithoutIdCardInput.schema';
import { BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutIdCardInput>;
export const BeneficiaryCreateOrConnectWithoutIdCardInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutIdCardInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutIdCardInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
