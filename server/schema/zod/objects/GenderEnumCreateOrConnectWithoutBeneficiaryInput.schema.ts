/* eslint-disable */
import { z } from 'zod';
import { GenderEnumWhereUniqueInputObjectSchema } from './GenderEnumWhereUniqueInput.schema';
import { GenderEnumCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumCreateWithoutBeneficiaryInput.schema';
import { GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './GenderEnumUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.GenderEnumCreateOrConnectWithoutBeneficiaryInput>;
export const GenderEnumCreateOrConnectWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => GenderEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => GenderEnumCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => GenderEnumUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
