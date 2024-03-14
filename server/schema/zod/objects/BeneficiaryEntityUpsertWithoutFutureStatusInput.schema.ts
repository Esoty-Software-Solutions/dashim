/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutFutureStatusInput.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpsertWithoutFutureStatusInput>;
export const BeneficiaryEntityUpsertWithoutFutureStatusInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutFutureStatusInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutFutureStatusInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutFutureStatusInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
