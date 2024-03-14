/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryCreateWithoutFutureStatusInput.schema';
import { BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutFutureStatusInput>;
export const BeneficiaryUpsertWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutFutureStatusInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutFutureStatusInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
