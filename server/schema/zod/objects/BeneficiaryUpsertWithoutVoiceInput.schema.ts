/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUpdateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutVoiceInput.schema';
import { BeneficiaryCreateWithoutVoiceInputObjectSchema } from './BeneficiaryCreateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutVoiceInput.schema';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithoutVoiceInput>;
export const BeneficiaryUpsertWithoutVoiceInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutVoiceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutVoiceInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema),
        ]),
        where: z.lazy(() => BeneficiaryWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
