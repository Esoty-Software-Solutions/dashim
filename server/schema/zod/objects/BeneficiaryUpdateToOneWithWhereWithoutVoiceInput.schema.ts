/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';
import { BeneficiaryUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUpdateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateToOneWithWhereWithoutVoiceInput>;
export const BeneficiaryUpdateToOneWithWhereWithoutVoiceInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutVoiceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
