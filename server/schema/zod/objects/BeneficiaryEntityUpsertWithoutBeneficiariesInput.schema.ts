/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpsertWithoutBeneficiariesInput>;
export const BeneficiaryEntityUpsertWithoutBeneficiariesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
