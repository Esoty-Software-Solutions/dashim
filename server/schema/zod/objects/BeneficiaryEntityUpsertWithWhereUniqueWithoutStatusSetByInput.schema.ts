/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from './BeneficiaryEntityWhereUniqueInput.schema';
import { BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateWithoutStatusSetByInput.schema';
import { BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryEntityUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInput>;
export const BeneficiaryEntityUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryEntityWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryEntityUpdateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedUpdateWithoutStatusSetByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryEntityCreateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryEntityUncheckedCreateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
