/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUpsertWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpsertWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateToOneWithWhereWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpdateToOneWithWhereWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUpdateWithoutBeneficiariesInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpdateOneRequiredWithoutBeneficiariesNestedInput>;
export const BeneficiaryEntityUpdateOneRequiredWithoutBeneficiariesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => BeneficiaryEntityCreateWithoutBeneficiariesInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutBeneficiariesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => BeneficiaryEntityCreateOrConnectWithoutBeneficiariesInputObjectSchema).optional(),
        upsert: z.lazy(() => BeneficiaryEntityUpsertWithoutBeneficiariesInputObjectSchema).optional(),
        connect: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => BeneficiaryEntityUpdateToOneWithWhereWithoutBeneficiariesInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUpdateWithoutBeneficiariesInputObjectSchema),
                z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutBeneficiariesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
