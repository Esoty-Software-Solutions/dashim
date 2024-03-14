/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';
import { BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFaceInput.schema';
import { BeneficiaryUpsertWithoutFaceInputObjectSchema } from './BeneficiaryUpsertWithoutFaceInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateToOneWithWhereWithoutFaceInputObjectSchema } from './BeneficiaryUpdateToOneWithWhereWithoutFaceInput.schema';
import { BeneficiaryUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUpdateWithoutFaceInput.schema';
import { BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpdateOneRequiredWithoutFaceNestedInput>;
export const BeneficiaryUpdateOneRequiredWithoutFaceNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryUpsertWithoutFaceInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryUpdateToOneWithWhereWithoutFaceInputObjectSchema),
                z.lazy(() => BeneficiaryUpdateWithoutFaceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedUpdateWithoutFaceInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
