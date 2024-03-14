/* eslint-disable */
import { z } from 'zod';
import { IDCardCreateWithoutBeneficiaryInputObjectSchema } from './IDCardCreateWithoutBeneficiaryInput.schema';
import { IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './IDCardUncheckedCreateWithoutBeneficiaryInput.schema';
import { IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './IDCardCreateOrConnectWithoutBeneficiaryInput.schema';
import { IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema } from './IDCardCreateManyBeneficiaryInputEnvelope.schema';
import { IDCardWhereUniqueInputObjectSchema } from './IDCardWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardUncheckedCreateNestedManyWithoutBeneficiaryInput>;
export const IDCardUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => IDCardCreateWithoutBeneficiaryInputObjectSchema).array(),
                z.lazy(() => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => IDCardUncheckedCreateWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => IDCardCreateOrConnectWithoutBeneficiaryInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => IDCardCreateManyBeneficiaryInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => IDCardWhereUniqueInputObjectSchema),
                z.lazy(() => IDCardWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict() as SchemaType;
