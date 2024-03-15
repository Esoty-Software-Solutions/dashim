/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryWhereUniqueInputObjectSchema } from './BeneficiaryWhereUniqueInput.schema';
import { BeneficiaryUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedUpdateWithoutStatusSetByInput.schema';
import { BeneficiaryCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryCreateWithoutStatusSetByInput.schema';
import { BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema } from './BeneficiaryUncheckedCreateWithoutStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInput>;
export const BeneficiaryUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryUpdateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedUpdateWithoutStatusSetByInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryCreateWithoutStatusSetByInputObjectSchema),
            z.lazy(() => BeneficiaryUncheckedCreateWithoutStatusSetByInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
