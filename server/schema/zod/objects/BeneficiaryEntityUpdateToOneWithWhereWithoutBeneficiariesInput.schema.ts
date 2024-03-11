/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';
import { BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateToOneWithWhereWithoutBeneficiariesInput>;
export const BeneficiaryEntityUpdateToOneWithWhereWithoutBeneficiariesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
