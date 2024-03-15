/* eslint-disable */
import { z } from 'zod';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';
import { GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateOrConnectWithoutBeneficiaryInput.schema';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCreateNestedOneWithoutBeneficiaryInput>;
export const GenderEnumCreateNestedOneWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
                z.lazy(() => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema).optional(),
        connect: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
