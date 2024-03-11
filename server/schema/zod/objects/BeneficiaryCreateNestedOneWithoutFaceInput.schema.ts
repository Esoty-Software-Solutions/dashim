/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateWithoutFaceInputObjectSchema } from './BeneficiaryCreateWithoutFaceInput.schema';
import { BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutFaceInput.schema';
import { BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema } from './BeneficiaryCreateOrConnectWithoutFaceInput.schema';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCreateNestedOneWithoutFaceInput>;
export const BeneficiaryCreateNestedOneWithoutFaceInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryCreateWithoutFaceInputObjectSchema),
                z.lazy(() => BeneficiaryUncheckedCreateWithoutFaceInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryCreateOrConnectWithoutFaceInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
