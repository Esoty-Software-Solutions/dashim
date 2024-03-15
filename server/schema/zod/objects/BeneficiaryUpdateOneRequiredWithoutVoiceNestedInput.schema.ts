/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutVoiceInputObjectSchema } from './BeneficiaryCreateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutVoiceInput.schema';
import { BeneficiaryCreateOrConnectWithoutVoiceInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutVoiceInput.schema';
import { BeneficiaryUpsertWithoutVoiceInputObjectSchema } from './BeneficiaryUpsertWithoutVoiceInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateToOneWithWhereWithoutVoiceInputObjectSchema } from './BeneficiaryUpdateToOneWithWhereWithoutVoiceInput.schema';
import { BeneficiaryUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUpdateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutVoiceNestedInput>;
export const BeneficiaryUpdateOneRequiredWithoutVoiceNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutVoiceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutVoiceInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryUpsertWithoutVoiceInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateToOneWithWhereWithoutVoiceInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithoutVoiceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedUpdateWithoutVoiceInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
