/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from './BeneficiaryFutureStatusChangeWhereUniqueInput.schema';
import { BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInput.schema';
import { BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInput>;
export const BeneficiaryFutureStatusChangeUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeUpdateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedUpdateWithoutBeneficiaryInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => BeneficiaryFutureStatusChangeCreateWithoutBeneficiaryInputObjectSchema),
            z.lazy(() => BeneficiaryFutureStatusChangeUncheckedCreateWithoutBeneficiaryInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
