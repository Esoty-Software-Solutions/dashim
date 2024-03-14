/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInput>;
export const BeneficiaryEntityCreateNestedOneWithoutBeneficiariesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
