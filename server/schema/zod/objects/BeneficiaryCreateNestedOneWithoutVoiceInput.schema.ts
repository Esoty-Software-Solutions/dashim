/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutVoiceInputObjectSchema } from './BeneficiaryCreateWithoutVoiceInput.schema';
import { BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutVoiceInput.schema';
import { BeneficiaryCreateOrConnectWithoutVoiceInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutVoiceInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutVoiceInput>;
export const BeneficiaryCreateNestedOneWithoutVoiceInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutVoiceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutVoiceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutVoiceInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
