/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateOrConnectWithoutFutureStatusInput>;
export const BeneficiaryCreateOrConnectWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
